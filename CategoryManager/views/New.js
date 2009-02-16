/**
 * Ext.ux.App.CategoryManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Category Manager new Category form window
 */
Ext.ux.App.CategoryManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:   Ext.ux.App.CategoryManager.Category,
    iconCls: 'category',
    
    formConfig: {
      items: Ext.ux.App.CategoryManager.view.FormFields()
    }
  });
  
  Ext.ux.App.CategoryManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.CategoryManager.view.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('category-manager_new', Ext.ux.App.CategoryManager.view.New);