/**
 * Ext.ux.App.CategoryManager.CategoryManagerController
 * @extends Ext.ux.App.CrudController
 * Category controller - basic CRUD
 */
Ext.ux.App.CategoryManager.CategoryManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.CategoryManager.view",
    viewWindowNamespace : 'category-manager'
  });
  
  Ext.ux.App.CategoryManager.CategoryManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.CategoryManager.CategoryManagerController, Ext.ux.App.CrudController);
