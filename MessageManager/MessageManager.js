/**
 * Ext.ux.App.MessageManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides Message model CRUD
 */
Ext.ux.App.MessageManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.MessageManager.Message;
  this.controller = new Ext.ux.App.MessageManager.MessageManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'message-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Message Management',
      iconCls: 'feedback',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.MessageManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.MessageManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.MessageManager.view");