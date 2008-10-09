/**
 * Ext.ux.App.NewsManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides News model CRUD
 */
Ext.ux.App.NewsManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.NewsManager.NewsItem;
  this.controller = new Ext.ux.App.NewsManager.NewsManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'news_item-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'News Management',
      iconCls: 'page',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.NewsManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.NewsManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.NewsManager.view");