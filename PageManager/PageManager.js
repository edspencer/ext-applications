/**
 * Ext.ux.App.PageManager
 * @extends Ext.ux.App.Scaffold
 * Page Manager application (CRUD)
 */
Ext.ux.App.PageManager = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:      Ext.ux.App.PageManager.Page,
    namespace: 'Ext.ux.App.PageManager',
    
    text:      'Page Manager',
    iconCls:   'page'
  });
  
  Ext.ux.App.PageManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.PageManager, Ext.ux.App.Scaffold);
