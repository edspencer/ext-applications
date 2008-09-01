/**
 * Ext.ux.App.UserManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * User Manager new User form window
 */
Ext.ux.App.UserManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.UserManager.User,
    formConfig: {
      items: Ext.ux.App.UserManager.view.FormFields()
    }
  });
  
  Ext.ux.App.UserManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.UserManager.view.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('user_manager_new', Ext.ux.App.UserManager.view.New);