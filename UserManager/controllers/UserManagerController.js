/**
 * Ext.ux.App.UserManager.UserManagerController
 * @extends Ext.ux.App.CrudController
 * Users controller - basic CRUD
 */
Ext.ux.App.UserManager.UserManagerController = function(config) {
  var config = config || {};
  Ext.apply(this, config);
  
  this.viewsPackage = "Ext.ux.App.UserManager.view";
  this.viewWindowNamespace = 'user-manager';
  
  Ext.ux.App.UserManager.UserManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.UserManager.UserManagerController, Ext.ux.App.CrudController);
