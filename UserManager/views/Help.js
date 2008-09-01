/**
 * Ext.ux.App.UserManager.view.Help
 * @extends Ext.ux.App.view.GenericHelpWindow
 * Displays a help screen for the user manager
 */
Ext.ux.App.UserManager.view.Help = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    title: "User Manager Help",
    html: [
      {tag: 'h1', html: 'User Manager Help'},
      {tag: 'p',  html: 'The User Manager application allows you to create, update or delete users from on the system'},
      Ext.ux.App.view.GenericHelpWindow.keyboardShortcuts(Ext.ux.App.UserManager.User)
    ]
  });
  
  Ext.ux.App.UserManager.view.Help.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.UserManager.view.Help, Ext.ux.App.view.GenericHelpWindow);
Ext.reg('user_manager_help', Ext.ux.App.UserManager.view.Help);