/**
 * Ext.ux.App.ImageBrowser.ImageBrowserController
 * @extends Ext.ux.App.CrudController
 * Image browser CRUD controller
 */
Ext.ux.App.ImageBrowser.ImageBrowserController = function(config) {
  var config = config || {};
  
  Ext.apply(this, config);
  
  this.viewsPackage        = "Ext.ux.App.ImageBrowser.view";
  this.viewWindowNamespace = 'image-browser';
    
  Ext.ux.App.ImageBrowser.ImageBrowserController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ImageBrowser.ImageBrowserController, Ext.ux.App.CrudController);
