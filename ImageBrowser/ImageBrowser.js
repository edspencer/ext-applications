/**
 * Ext.ux.App.ImageBrowser
 * @extends Ext.ux.App.Base
 * Simple Image browser application
 */
Ext.ux.App.ImageBrowser = function(config) {
  var config = config || {};
    
  this.windowGroup = new Ext.WindowGroup();
  
  this.model      = Ext.ux.App.ImageBrowser.Image;
  this.controller = new Ext.ux.App.ImageBrowser.ImageBrowserController({
    model: this.model, 
    windowGroup: this.windowGroup,
    app: this
  });
  
  this.id = 'image-browser-win';

  this.init = function(){
    this.launcher = {
      text: 'Image Browser',
      iconCls: 'image',
      handler : this.launch,
      scope: this
    };
  };
    
  Ext.ux.App.ImageBrowser.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ImageBrowser, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.ImageBrowser.view");