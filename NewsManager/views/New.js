/**
 * Ext.ux.App.NewsManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindowWithTinyMce
 * News Manager new News form window
 */
Ext.ux.App.NewsManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:    Ext.ux.App.NewsManager.NewsItem,
    iconCls: 'page',
    width:   700,
    
    formConfig: {
      items:    Ext.ux.App.NewsManager.view.FormFields(),
      defaults: {xtype: null}
    }
  });
  
  Ext.ux.App.NewsManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.NewsManager.view.New, Ext.ux.App.view.DefaultNewWindowWithTinyMce);
Ext.reg('news_item-manager_new', Ext.ux.App.NewsManager.view.New);