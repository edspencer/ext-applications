/**
 * Ext.ux.App.UserManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * User Manager edit user view
 */
Ext.ux.App.UserManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.UserManager.User,
    formConfig: {
      items: Ext.ux.App.UserManager.view.FormFields()
    }
  });
  
  Ext.ux.App.UserManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.UserManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('user_manager_edit', Ext.ux.App.UserManager.view.Edit);