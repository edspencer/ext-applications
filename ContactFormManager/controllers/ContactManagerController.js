/**
 * Ext.ux.App.ContactFormManager.ContactFormManagerController
 * @extends Ext.ux.App.CrudController
 * Contact controller - basic CRUD
 */
Ext.ux.App.ContactFormManager.ContactFormManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.ContactFormManager.view",
    viewWindowNamespace : 'contact-manager'
  });
  
  Ext.ux.App.ContactFormManager.ContactFormManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ContactFormManager.ContactFormManagerController, Ext.ux.App.CrudController);
