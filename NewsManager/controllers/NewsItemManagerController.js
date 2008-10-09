/**
 * Ext.ux.App.NewsManager.NewsManagerController
 * @extends Ext.ux.App.CrudController
 * News controller - basic CRUD
 */
Ext.ux.App.NewsManager.NewsManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.NewsManager.view",
    viewWindowNamespace : 'news_item-manager'
  });
  
  Ext.ux.App.NewsManager.NewsManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.NewsManager.NewsManagerController, Ext.ux.App.CrudController);
