/**
 * Ext.ux.App.OrderManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides Order model CRUD
 */
Ext.ux.App.OrderManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.OrderManager.Order;
  this.controller = new Ext.ux.App.OrderManager.OrderManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'order-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Order Management',
      iconCls: 'order',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.OrderManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.OrderManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.OrderManager.view");