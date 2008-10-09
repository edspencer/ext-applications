/**
 * Ext.ux.App.NewsManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for News Manager
 */
Ext.ux.App.NewsManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    iconCls: 'page',
    title:   'News Manager',
    
    gridConfig: {
      model:   Ext.ux.App.NewsManager.NewsItem,
      columns: Ext.ux.App.NewsManager.view.GridColumns()
    }
  });
  
  Ext.ux.App.NewsManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.NewsManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('news_item-manager_index', Ext.ux.App.NewsManager.view.Index);