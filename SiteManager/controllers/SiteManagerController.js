/**
 * Ext.ux.App.SiteManager.SiteManagerController
 * @extends Ext.ux.App.CrudController
 * Sites controller - basic CRUD
 */
Ext.ux.App.SiteManager.SiteManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.SiteManager.view",
    viewWindowNamespace : 'site-manager',
    
    hasIndexAction:   false,
    hasNewAction:     false,
    hasUpdateAction:  false,
    hasCreateAction:  false,
    hasDestroyAction: false,
    hasShowAction:    false
  });
  
  this.actions = {
    'edit': function(config) {
      var config = config || {};
      var desktop = this.app.desktop;
      
      var windowId = this.namespacedWindowName('edit');
      var win = desktop.getWindow(windowId);
      Ext.applyIf(config, {
        controller: this,
        id:         windowId
      });

      if (!win) {
        win = desktop.createWindow(config, this.views['edit']);
      }
      
      win.show();
    }
  };
  
  Ext.ux.App.SiteManager.SiteManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.SiteManager.SiteManagerController, Ext.ux.App.CrudController);
