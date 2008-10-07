/**
 * Ext.ux.App.DesignerManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Designer Manager edit Designer view
 */
Ext.ux.App.DesignerManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.DesignerManager.Designer,
    formConfig: {
      items: Ext.ux.App.DesignerManager.view.FormFields()
    }
  });
  
  Ext.ux.App.DesignerManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.DesignerManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('designer-manager_edit', Ext.ux.App.DesignerManager.view.Edit);