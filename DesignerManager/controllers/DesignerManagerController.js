/**
 * Ext.ux.App.DesignerManager.DesignerManagerController
 * @extends Ext.ux.App.CrudController
 * Designer controller - basic CRUD
 */
Ext.ux.App.DesignerManager.DesignerManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.DesignerManager.view",
    viewWindowNamespace : 'designer-manager'
  });
  
  Ext.ux.App.DesignerManager.DesignerManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.DesignerManager.DesignerManagerController, Ext.ux.App.CrudController);
