import { defineMessages } from 'react-intl';

/**
 * Internationalized messages for use on views.
 */
export default defineMessages({
  pageNotFound: {
    id: 'notFound.page.title',
    defaultMessage: 'Page not found',
  },
  projectNotFound: {
    id: 'notFound.project.title',
    defaultMessage: 'Project {id} not found',
  },
  notFoundLead: {
    id: 'notFound.lead',
    defaultMessage: 'Check the URL or report this error.',
  },
  sectionNotAllowed: {
    id: 'management.forbiddenAccess.title',
    defaultMessage: 'You are not allowed to access the management area.',
  },
  loginRequired: {
    id: 'loginPage.title',
    defaultMessage: 'Login or register an account',
  },
  manageUsers: {
    id: 'management.users.title',
    defaultMessage: 'Manage users',
  },
  newOrganisation: {
    id: 'teamsAndOrgs.management.organisation.creation',
    defaultMessage: 'Create new organization',
  },
  newTeam: {
    id: 'teamsAndOrgs.management.team.creation',
    defaultMessage: 'Create new team',
  },
  newCampaign: {
    id: 'teamsAndOrgs.management.campaign.creation',
    defaultMessage: 'Create new campaign',
  },
  createOrganisation: {
    id: 'teamsAndOrgs.management.organisation.button.create',
    defaultMessage: 'Create organization',
  },
  createTeam: {
    id: 'teamsAndOrgs.management.team.button.create',
    defaultMessage: 'Create team',
  },
  createCampaign: {
    id: 'teamsAndOrgs.management.campaign.button.create',
    defaultMessage: 'Create campaign',
  },
  myTeams: {
    id: 'teamsAndOrgs.management.button.my_teams',
    defaultMessage: 'My teams',
  },
  joinTeam: {
    id: 'teamsAndOrgs.management.button.join_team',
    defaultMessage: 'Join team',
  },
  cancelRequest: {
    id: 'teamsAndOrgs.management.button.cancel_request',
    defaultMessage: 'Cancel request',
  },
  leaveTeam: {
    id: 'teamsAndOrgs.management.button.leave_team',
    defaultMessage: 'Leave team',
  },
  cancel: {
    id: 'teamsAndOrgs.management.button.cancel',
    defaultMessage: 'Cancel',
  },
  manageOrganisation: {
    id: 'teamsAndOrgs.management.organisation.manage',
    defaultMessage: 'Manage organization',
  },
  manageTeam: {
    id: 'teamsAndOrgs.management.team.manage',
    defaultMessage: 'Manage team',
  },
  manageCampaign: {
    id: 'teamsAndOrgs.management.campaign.manage',
    defaultMessage: 'Manage campaign',
  },
  teamInfo: {
    id: 'teamsAndOrgs.management.titles.team_information',
    defaultMessage: 'Team information',
  },
  campaignInfo: {
    id: 'teamsAndOrgs.management.titles.campaign_information',
    defaultMessage: 'Campaign information',
  },
  manageCategory: {
    id: 'management.category.manage',
    defaultMessage: 'Manage category',
  },
  categoryInfo: {
    id: 'management.interest.title',
    defaultMessage: 'Category information',
  },
  newCategory: {
    id: 'management.category.creation',
    defaultMessage: 'Create new category',
  },
  createCategory: {
    id: 'management.category.button.create',
    defaultMessage: 'Create category',
  },
  noLockedTasksMessage: {
    id: 'taskAction.messages.error.no_locked_tasks.text',
    defaultMessage:
      "You don't have any locked tasks. Access the Project #{currentProject} to select a task to map.",
  },
  goToProjectButton: {
    id: 'taskAction.go_to_project.button',
    defaultMessage: 'Go to Project #{project}',
  },
  profileSettings: {
    id: 'EmailVerification.link.profileSettings',
    defaultMessage: 'Your profile settings',
  },
  emailVerified: {
    id: 'EmailVerification.status.verified',
    defaultMessage: 'Email confirmed successfully!',
  },
  verificationError: {
    id: 'EmailVerification.status.error',
    defaultMessage: 'Verification failed.',
  },
  verificationErrorExplanation: {
    id: 'EmailVerification.status.error.explanation',
    defaultMessage:
      'The verification of your email failed. Check if the URL on the browser matches with the URL sent to your email.',
  },
  emailVerifiedExplanation: {
    id: 'EmailVerification.status.verified.explanation',
    defaultMessage: 'Thanks for providing your email address.',
  },
  successExtraLine: {
    id: 'EmailVerification.status.verified.explanation.extraLine',
    defaultMessage:
      'From now on, we will keep you updated on how you can make the difference by mapping on Tasking Manager. You can customize your notification preferences on {link}.',
  },
  about: {
    id: 'pages.about.title',
    defaultMessage: 'About Tasking Manager',
  },
  aboutIntro: {
    id: 'pages.about.intro',
    defaultMessage:
      'Every day, a global community works tirelessly behind the scenes to literally put people on the map. They contribute to the online Open Data map of the world. Universal access to geospatial information is heavily changing how people use maps and what they build with them.',
  },

  learn: {
    id: 'pages.learn.title',
    defaultMessage: 'Learn',
  },
  learnMapTitle: {
    id: 'pages.learn.map.title',
    defaultMessage: 'Learn to map',
  },
  learnMapIntro: {
    id: 'pages.learn.map.intro',
    defaultMessage:
      'Mapping in OpenStreetMap is a team effort, continually growing due to a community of hundreds of thousands of dedicated global contributors. Everybody can participate in this open map of the world, and it needs responsible people, who are open to learn and show love for the details.',
  },
  learnMapDescription: {
    id: 'pages.learn.map.description',
    defaultMessage:
      'You can start your journey now. You do not have to ask permission before adding or modifying existing data. If you believe that you can improve something, then do it. But always remember, with great power comes great responsibility.',
  },
  learnTutorialsTitle: {
    id: 'pages.learn.tutorials.title',
    defaultMessage: 'tutorials & guides',
  },
  learnOSMTutorialTitle: {
    id: 'pages.learn.tutorials.learnosm.title',
    defaultMessage: 'Administration Guide',
  },
  learnOSMTutorialDescription: {
    id: 'pages.learn.tutorials.learnosm.description',
    defaultMessage: 'Manual on how to create and manage projects in the Tasking Manager',
  },
  learnMapStepSelectProjectTitle: {
    id: 'pages.learn.map.steps.project.title',
    defaultMessage: 'Select a project',
  },
  learnMapStepSelectProjectDescription: {
    id: 'pages.learn.map.steps.project.description',
    defaultMessage:
      'Search through our list of projects for one that meets your interests and fits your skill level.',
  },
  learnMapStepSelectTaskTitle: {
    id: 'pages.learn.map.steps.task.title',
    defaultMessage: 'Select a task',
  },
  learnMapStepSelectTaskDescription: {
    id: 'pages.learn.map.steps.task.description',
    defaultMessage:
      'Projects are divided into a set of tasks manageable in size and adapted to your skill level',
  },
  learnMapStepMapOSMTitle: {
    id: 'pages.learn.map.steps.map.title',
    defaultMessage: 'Map through OpenStreetMap',
  },
  learnMapStepMapOSMDescription: {
    id: 'pages.learn.map.steps.map.description',
    defaultMessage:
      'If you are new to mapping we recommend checking the manuals below before you start mapping.',
  },
  learnValidateTitle: {
    id: 'pages.learn.validate_title',
    defaultMessage: 'Learn to validate',
  },
  learnValidateIntro: {
    id: 'pages.learn.validate.intro',
    defaultMessage:
      'Validation is an important part of the process. It requires confidence in your mapping abilities as well as the willingness to help coach and advise newer mappers.',
  },
  learnValidateDescription: {
    id: 'pages.learn.validate.description',
    defaultMessage:
      'Getting a second, third, or fourth pair of eyes on mapped features is an important step for ensuring the quality of the data being added to OpenStreetMap and then used around the world.',
  },
  learnManageTitle: {
    id: 'pages.learn.manage_title',
    defaultMessage: 'Learn to manage',
  },
  learnManageIntro: {
    id: 'pages.learn.manage.intro',
    defaultMessage:
      'Being able to organize mapping efforts is a huge opportunity for fast and coordinated data collection. In order to be successful you must be able to motivate a community of mappers.',
  },
  learnManageDescription: {
    id: 'pages.learn.manage.description',
    defaultMessage:
      'You can use the Tasking Manager to set up your own projects. Be sure to be responsible by making sure your skill level matches your ambition. It is good to reach out to the administrators of the Tasking Manager and learn more about what is needed to obtain the permissions to create and manage projects.',
  },
  learnManageStepJoinTitle: {
    id: 'pages.learn.manage.steps.join.title',
    defaultMessage: 'Become part of a community or organization',
  },
  learnManageStepJoinDescription: {
    id: 'pages.learn.manage.steps.join.description',
    defaultMessage:
      'The Tasking Manager allows you to create projects as part of a community or organization. Either get in touch with one you know, or request the admins to add your group to the Tasking Manager.',
  },
  learnManageStepCreateTitle: {
    id: 'pages.learn.manage.steps.create.title',
    defaultMessage: 'Create a project and be loud about it',
  },
  learnManageStepCreateDescription: {
    id: 'pages.learn.manage.steps.create.description',
    defaultMessage:
      'Get people on board to map for your project. We suggest monitoring the mapping on your projects. Make sure to get them properly mapped and completed.',
  },
  learnManageStepDataTitle: {
    id: 'pages.learn.manage.steps.data.title',
    defaultMessage: 'Use the data',
  },
  learnManageStepDataDescription: {
    id: 'pages.learn.manage.steps.data.description',
    defaultMessage:
      'Download the data and use it for your initial purpose. The HOT Export Tool and the Overpass API are excellent to pick the information you need.',
  },
  contactUs: {
    id: 'pages.concact.title',
    defaultMessage: 'Contact Us',
  },
  contactUsThanksTitle: {
    id: 'home.contact.thanksTitle',
    defaultMessage: 'Thank You!',
  },
  contactUsThanksError: {
    id: 'home.contact.thanksError',
    defaultMessage: 'One moment, there was a problem sending your message.',
  },
  contactUsThanksBody: {
    id: 'home.contact.thanksBody',
    defaultMessage: "You'll be hearing from us soon!",
  },
  contactUsThanksProceed: {
    id: 'home.contact.thanksProceed',
    defaultMessage: 'Proceed',
  },
  tmDescription: {
    id: 'pages.about.description',
    defaultMessage:
      'The purpose of the Tasking Manager is to divide a large mapping project into smaller tasks that can be completed rapidly and collaboratively, with many people contributing to a collective project goal. The tool shows what needs to be mapped, which areas need to be reviewed and validated for quality assurance and which areas are completed.',
  },
  tmDescription2: {
    id: 'pages.about.description2',
    defaultMessage:
      'This approach allows the distribution of tasks to many individual mappers. It also allows monitoring of project progress and helps to improve the consistency of the mapping (e.g. elements to cover, specific tags to use, etc.',
  },
  osmDescription: {
    id: 'pages.about.OpenStreetMap.description',
    defaultMessage:
      'All work is done through {osmLink}. OpenStreetMap is the community-driven free and editable map of the world, supported by the not-for-profit OpenStreetMap Foundation.',
  },
  osmWiki: {
    id: 'pages.about.OpenStreetMap.wiki',
    defaultMessage:
      'Read more on the {osmWikiLink} or join the discussion with your local OSM community.',
  },
  floss: {
    id: 'pages.about.floss.title',
    defaultMessage: 'Free and Open Source Software',
  },
  flossDescription: {
    id: 'pages.about.floss.description',
    defaultMessage:
      'The Tasking Manager is Free and Open Source software developed by {hotLink}. The application’s code can be accessed through {code}, where you can report issues and make contributions.',
  },
  editProject: {
    id: 'pages.edit_project.title',
    defaultMessage: 'Edit project',
  },
  save: {
    id: 'pages.edit_project.buttons.save',
    defaultMessage: 'Save',
  },
  goToProjectPage: {
    id: 'pages.edit_project.buttons.go_to_project',
    defaultMessage: 'Go to project page',
  },
  updateSuccess: {
    id: 'pages.edit_project.actions.update.success',
    defaultMessage: 'Project updated successfully.',
  },
  updateError: {
    id: 'pages.edit_project.actions.update.error',
    defaultMessage: 'Project update failed: {error}',
  },
  projectEditSection_description: {
    id: 'pages.edit_project.sections.description',
    defaultMessage: 'Description',
  },
  projectEditSection_instructions: {
    id: 'pages.edit_project.sections.instructions',
    defaultMessage: 'Instructions',
  },
  projectEditSection_metadata: {
    id: 'pages.edit_project.sections.metadata',
    defaultMessage: 'Metadata',
  },
  projectEditSection_priority_areas: {
    id: 'pages.edit_project.sections.priority_areas',
    defaultMessage: 'Priority areas',
  },
  projectEditSection_imagery: {
    id: 'pages.edit_project.sections.imagery',
    defaultMessage: 'Imagery',
  },
  projectEditSection_permissions: {
    id: 'pages.edit_project.sections.permissions',
    defaultMessage: 'Permissions',
  },
  projectEditSection_settings: {
    id: 'pages.edit_project.sections.settings',
    defaultMessage: 'Settings',
  },
  projectEditSection_actions: {
    id: 'pages.edit_project.sections.actions',
    defaultMessage: 'Actions',
  },
  projectEditSection_custom_editor: {
    id: 'pages.edit_project.sections.custom_editor',
    defaultMessage: 'Custom Editor',
  },
});
