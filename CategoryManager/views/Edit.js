/**
 * Ext.ux.App.CategoryManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Category Manager edit Category view
 */
Ext.ux.App.CategoryManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.CategoryManager.Category,
    formConfig: {
      items: Ext.ux.App.CategoryManager.view.FormFields()
    }
  });
  
  Ext.ux.App.CategoryManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.CategoryManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('category-manager_edit', Ext.ux.App.CategoryManager.view.Edit);