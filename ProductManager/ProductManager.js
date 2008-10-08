/**
 * Ext.ux.App.ProductManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides Product model CRUD
 */
Ext.ux.App.ProductManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.ProductManager.Product;
  this.controller = new Ext.ux.App.ProductManager.ProductManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'product-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Product Management',
      iconCls: 'product',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.ProductManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ProductManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.ProductManager.view");
Ext.ns("Ext.ux.App.ProductManager.view.Colour");
Ext.ns("Ext.ux.App.ProductManager.view.Size");