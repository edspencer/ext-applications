/**
 * Ext.ux.App.NewsManager
 * @extends Ext.ux.App.Scaffold
 * News Manager application (CRUD)
 */
Ext.ux.App.NewsManager = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:      Ext.ux.App.NewsManager.NewsItem,
    namespace: 'Ext.ux.App.NewsManager',
    
    text:      'News Manager',
    iconCls:   'page'
  });
  
  Ext.ux.App.NewsManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.NewsManager, Ext.ux.App.Scaffold);
