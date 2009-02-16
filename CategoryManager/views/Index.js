/**
 * Ext.ux.App.CategoryManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for Category Manager
 */
Ext.ux.App.CategoryManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    iconCls: 'category',
    title:   'Category Manager',
    
    gridConfig: {
      model:   Ext.ux.App.CategoryManager.Category,
      columns: Ext.ux.App.CategoryManager.view.GridColumns()
    }
  });
  
  Ext.ux.App.CategoryManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.CategoryManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('category-manager_index', Ext.ux.App.CategoryManager.view.Index);