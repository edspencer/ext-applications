/**
 * Ext.ux.App.PageManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Page Manager edit Page view
 */
Ext.ux.App.PageManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.PageManager.Page,
    formConfig: {
      items: Ext.ux.App.PageManager.view.FormFields()
    }
  });
  
  Ext.ux.App.PageManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.PageManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('page-manager_edit', Ext.ux.App.PageManager.view.Edit);