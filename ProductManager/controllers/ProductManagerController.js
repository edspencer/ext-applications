/**
 * Ext.ux.App.ProductManager.ProductManagerController
 * @extends Ext.ux.App.CrudController
 * Product controller - basic CRUD
 */
Ext.ux.App.ProductManager.ProductManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.ProductManager.view",
    viewWindowNamespace : 'product-manager'
  });
  
  Ext.ux.App.ProductManager.ProductManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ProductManager.ProductManagerController, Ext.ux.App.CrudController);
