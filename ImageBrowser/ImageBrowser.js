/**
 * Ext.ux.App.ImageBrowser
 * @extends Ext.ux.App.Base
 * Simple Image browser application
 */
Ext.ux.App.ImageBrowser = function(config) {
  var config = config || {};
  
  this.version = 1.0;
  
  this.model      = Ext.ux.App.ImageBrowser.Image;
  this.controller = new Ext.ux.App.ImageBrowser.ImageBrowserController({
    model:       this.model, 
    app:         this
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

  this.registerStyleSheet();
};
Ext.extend(Ext.ux.App.ImageBrowser, Ext.ux.App.Base, {
  styleSheetId: 'image-browser-stylesheet',
  
  styleSheetRules: ' \
  .thumb-wrap { \
      float: left; \
      width: 120px; \
      height: 120px; \
      text-align: center; \
      padding-top: 10px; \
    } \
    \
    .thumb-wrap thumb img { margin: 0 auto;} \
    .x-view-selected { background-color: #CAD9EC;} \
    .x-view-over { border: 4px solid #CAD9EC; width: 112px; height:116px; padding-top: 6px;} \
     \
    .image-information { \
      padding: 5px; \
    } \
    \
    .image-information .image-preview { \
      text-align: center; \
      padding-bottom: 5px; \
      margin-bottom: 5px; \
      border-bottom: 1px solid #ccc; \
    } \
    \
    .image-information dt { \
      font-weight: bold; \
      color: #555; \
    } \
    \
    .image-information dd { \
      padding: 5px; \
    } \
    \
    .details { text-align: center;} \
    .details img {padding: 5px 0;} \
    .details .details-info {text-align: left; padding: 5px;} \
    .details .details-info dt {font-weight: bold; display: block; padding: 5px 0 3px 0;}',
  
  /**
   * Adds custom CSS rules for the image browser
   */
  registerStyleSheet: function() {
    Ext.util.CSS.createStyleSheet(this.styleSheetRules, this.styleSheetId);
  }
});

Ext.ns("Ext.ux.App.ImageBrowser.view");
