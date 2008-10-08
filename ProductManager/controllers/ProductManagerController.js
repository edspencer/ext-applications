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
  
  this.actions = {
    'newColour': function() {
      boo = this;
      var desktop  = this.app.desktop;
      var windowId = this.namespacedWindowName('new-colour');
      
      var win = desktop.getWindow(windowId);
      if (!win) {
        win = desktop.createWindow(Ext.apply({controller: this, id: windowId}, config), this.views['colour_new']);
      };
      
      win.show();
    }
  };
  
  Ext.ux.App.ProductManager.ProductManagerController.superclass.constructor.call(this, config);
  
  this.installViews("Ext.ux.App.ProductManager.view.Colour", 'colour');
};
Ext.extend(Ext.ux.App.ProductManager.ProductManagerController, Ext.ux.App.CrudController);
