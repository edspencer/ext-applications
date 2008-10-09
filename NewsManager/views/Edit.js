/**
 * Ext.ux.App.NewsManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindowWithTinyMce
 * News Manager edit News view
 */
Ext.ux.App.NewsManager.view.Edit = function(config) {
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
  
  Ext.ux.App.NewsManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.NewsManager.view.Edit, Ext.ux.App.view.DefaultEditWindowWithTinyMce);
Ext.reg('news_item-manager_edit', Ext.ux.App.NewsManager.view.Edit);