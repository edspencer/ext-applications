/**
 * Ext.ux.App.MessageManager.MessageManagerController
 * @extends Ext.ux.App.CrudController
 * Message controller - basic CRUD
 */
Ext.ux.App.MessageManager.MessageManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.MessageManager.view",
    viewWindowNamespace : 'message-manager'
  });
  
  Ext.ux.App.MessageManager.MessageManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.MessageManager.MessageManagerController, Ext.ux.App.CrudController);
