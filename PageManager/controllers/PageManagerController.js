/**
 * Ext.ux.App.PageManager.PageManagerController
 * @extends Ext.ux.App.CrudController
 * Page controller - basic CRUD
 */
Ext.ux.App.PageManager.PageManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.PageManager.view",
    viewWindowNamespace : 'page-manager'
  });
  
  Ext.ux.App.PageManager.PageManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.PageManager.PageManagerController, Ext.ux.App.CrudController);
