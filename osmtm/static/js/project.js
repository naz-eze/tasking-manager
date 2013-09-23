var lmap, task_layer, tiles, utf_layer;
var prefered_editor;
$('a[data-toggle="tab"]').on('shown', function (e) {
    if (e.target.id != 'map_tab' || lmap) {
        return;
    }
    lmap = L.map('leaflet');
    // create the tile layer with correct attribution
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © OpenStreetMap contributors';
    var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
    lmap.addLayer(osm);

    var layer = new L.geoJson(geometry);
    lmap.fitBounds(layer.getBounds());
    lmap.zoomOut();

    tiles = new L.TileLayer(
        '/project/' + project_id + '/{z}/{x}/{y}.png'
    );
    lmap.addLayer(tiles);

    task_layer = L.geoJson(null, {
        style: {
            weight: 1
        }
    }).addTo(lmap);

    utf_layer = new L.UtfGrid(
        '/project/' + project_id + '/{z}/{x}/{y}.json', {
        useJsonP: false
    });
    lmap.addLayer(utf_layer);
    utf_layer.on('click', function (e) {
        if (e.data && e.data.id) {
            location.hash = ["task", e.data.id].join('/');
        } else {
            clearSelection();
        }
    });
});

function clearSelection() {
    location.hash = "";
    task_layer.clearLayers();
    $('#task').fadeOut(function() {
        $('#task').empty();
        $('#task_empty').fadeIn();
    });
}

function loadTask(id, direction) {
    startLoading();
    function load() {
        $('#task').load(
            base_url + "task/" + id,
            null,
            function(response, status, request) {
                stopLoading();
                if (status != 'error') {
                    task_layer.clearLayers();
                    task_layer.addData(task_geometry);
                    $('#task').fadeIn();
                } else {
                    alert("an error occured");
                }
            }
        );
    }
    $(document.body).scrollTop(0);
    $('#map_tab').tab('show');
    $('#task_empty').fadeOut(
        function() {
            if (direction) {
                $('#task_actions').slide(direction)
                    .one('slid', load);
            } else {
                $('#task').fadeOut(function() {
                    load();
                });
            }
        }
    );
}

function startLoading() {
    $('#task_loading').show();
}
function stopLoading() {
    $('#task_loading').fadeOut();
}

function onTaskAction(e) {

    if ($(this).hasClass('disabled')) {
        return false;
    }

    var direction = e.data && e.data.direction;
    $.getJSON(this.href || e.action, e.formData, function(data) {

        tiles.redraw();

        // clear UTF Grid cache and update
        var i;
        for (i in utf_layer._cache) {
            delete utf_layer._cache[i];
        }
        utf_layer._update();

        if (data.task) {
            var task = data.task;
            loadTask(task.id, direction);
            return;
        }
        if (data.msg) {
            $('#task_msg').html(data.msg).show()
                .delay(3000)
                .fadeOut();
        }
        //if (data.error_msg) {
            //$('#task_error_msg').html(data.error_msg).show()
                //.delay(3000)
                //.fadeOut();
            //return;
        //}
        //if (data.split_id) {
            //splitTask(data.split_id, data.new_tiles);
        //}
        //$('#task_actions').slide(direction)
            //.one('slid', clearSelection);
        clearSelection();
        //loadEmptyTask();
    }).fail(function(error) {
        if (error.status == 401) {
            if (confirm('Please login first')) {
                window.location = login_url + '?came_from=' + encodeURIComponent(window.location.href);
            }
        }
    });
    return false;
}
$(document).on('click', '#lock', {direction: 'next'}, onTaskAction);
$(document).on('click', '#unlock', {direction: 'prev'}, onTaskAction);
$(document).on('click', '#split', {direction: 'next'}, function(e) {
    if (confirm($(this).attr('data-confirm'))) {
        onTaskAction.call(this, e);
    }
    return false;
});

$(document).on('submit', 'form', function(e) {
    var form = this;
    function load() {
        hideTooltips();
        var formData = $(form).serializeObject();
        var submitName = $("button[type=submit][clicked=true]").attr("name");
        formData[submitName] = true;
        //onTaskAction({
            //action: form.action,
            //formData: formData,
            //data: null
        //});
        $.post(form.action, formData, function(response) {
            clearSelection();
            tiles.redraw();
        });
    }
    if ($(form).has($('#commentModal')).length > 0) {
        $('#commentModal').modal('show');
        $('#task_comment').focus()
            .on('keyup', function() {
                $('#commentModalCloseBtn').toggleClass('disabled',
                    $(this).val() === ''
                );
            });
        $('#commentModalCloseBtn').on('click', function() {
            if ($('#task_comment')[0].value !== '') {
                $('#commentModal').modal('hide');
                load();
            }
        });
    } else {
        load();
    }
    return false;
});
$(document).on("click", "form button[type=submit]", function() {
    $("button[type=submit]", $(this).parents("form")).removeAttr("clicked");
    $(this).attr("clicked", "true");
});
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var exportOpen = function(evt) {
    // task_centroid and task_bounds are global variables (given for the
    // currently selected task)
    var editor;
    if (this.id == 'edit') {
        if (prefered_editor) {
            editor = prefered_editor;
        } else {
            return false;
        }
    } else {
        editor = this.id;
    }

    $.ajax({
        url: '/user/prefered_editor/' + editor,
        complete: function(t) {
            prefered_editor = editor;
            setPreferedEditor();
        }
    });

    function roundd(input, decimals) {
        var p = Math.pow(10, decimals);
        return Math.round(input*p)/p;
    }
    function getLink(options) {
        if (options.protocol === 'lbrt') {
            var bounds = options.bounds;
            return options.base + $.param({
                left: roundd(bounds[0],5),
                bottom: roundd(bounds[1],5),
                right: roundd(bounds[2],5),
                top: roundd(bounds[3],5)
            });
        } else if (options.protocol === 'llz') {
            var c = options.centroid;
            var so = new L.LatLng(task_bounds[0], task_bounds[1]),
                ne = new L.LatLng(task_bounds[2], task_bounds[3]),
                zoom = lmap.getBoundsZoom(new L.LatLngBounds(so, ne));
            return options.base + $.param({
                lon: roundd(c[0],5),
                lat: roundd(c[1],5),
                zoom: zoom
            });
        }
    }

    switch (editor) {
    case "josm":
        url = getLink({
            base: 'http://127.0.0.1:8111/load_and_zoom?',
            bounds: task_bounds,
            protocol: 'lbrt'
        });
        $.ajax({
            url: url,
            complete: function(t) {
                if (t.status != 200) {
                    alert("JOSM remote control did not respond. Do you have JOSM running and configured to be controlled remotely?");
                }
            }
        });
        break;
    case "potlatch2":
        url = getLink({
            base: 'http://www.openstreetmap.org/edit?editor=potlatch2&',
            centroid: task_centroid,
            protocol: 'llz'
        });
        window.open(url);
        break;
    case "wp":
        url = getLink({
            base: 'http://walking-papers.org/?',
            centroid: task_centroid,
            protocol: 'llz'
        });
        window.open(url);
        break;
    case "iDeditor":
        url = getLink({
            base: 'http://www.openstreetmap.org/edit?editor=id&',
            centroid: task_centroid,
            protocol: 'llz'
        });
        window.open(url);
        break;
    default:
        break;
    }
};
$(document).on('click', '#edit', exportOpen);
$(document).on('click', '#editDropdown li', exportOpen);

function setPreferedEditor() {
    if (prefered_editor !== '') {
        $('#prefered_editor').text($('#' + prefered_editor + ' a').text());
    }
}

Sammy(function() {
    this.get('#task/:id', function() {
        loadTask(this.params.id);
    });
}).run();

function hideTooltips() {
    $('[rel=tooltip]').tooltip('hide');
}
$.fn.slide = function(type) {
    // we hide tooltips since they may interact with transitions
    hideTooltips();
    var $container = $(this);
    var $active = $('<div class="item active">');
    $active.html($container.html());
    $container.html('').append($active);
    var direction = type == 'next' ? 'left' : 'right';
    var $next = $('<div>');
    if ($.support.transition) {
        $next.addClass(type);
        $next.offsetWidth; // force reflow
        $container.append($next);
        setTimeout(function() {
            $active.addClass(direction);
            $active.one($.support.transition.end, function (e) {
                $next.removeClass([type, direction].join(' ')).addClass('active');
                $active.remove();
                setTimeout(
                    function () {
                        $next.addClass('item');
                        $container.trigger('slid');
                    },
                    0
                );
            });
        }, 200); // time to hide tooltips
    } else {
        setTimeout(
            function () {
                $next.addClass('item');
                $container.trigger('slid');
            },
            0
        );
    }
    return this;
};
