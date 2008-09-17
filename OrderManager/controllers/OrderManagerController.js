/**
 * Ext.ux.App.OrderManager.OrderManagerController
 * @extends Ext.ux.App.CrudController
 * Order controller - basic CRUD
 */
Ext.ux.App.OrderManager.OrderManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.OrderManager.view",
    viewWindowNamespace : 'order-manager'
  });
  
  Ext.ux.App.OrderManager.OrderManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.OrderManager.OrderManagerController, Ext.ux.App.CrudController);
