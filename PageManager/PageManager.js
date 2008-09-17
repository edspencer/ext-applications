/**
 * Ext.ux.App.PageManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides Page model CRUD
 */
Ext.ux.App.PageManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.PageManager.Page;
  this.controller = new Ext.ux.App.PageManager.PageManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'page-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Page Management',
      iconCls: 'page',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.PageManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.PageManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.PageManager.view");