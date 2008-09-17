/**
 * Ext.ux.App.PageManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for Page Manager
 */
Ext.ux.App.PageManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    iconCls: 'page',
    title:   'Page Manager',
    
    gridConfig: {
      model:   Ext.ux.App.PageManager.Page,
      columns: Ext.ux.App.PageManager.view.GridColumns()
    }
  });
  
  Ext.ux.App.PageManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.PageManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('page-manager_index', Ext.ux.App.PageManager.view.Index);