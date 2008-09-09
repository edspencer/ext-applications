/**
 * Ext.ux.App.ImageBrowser.view.Help
 * @extends Ext.ux.App.view.GenericHelpWindow
 * Displays a help screen for the Image Browser application
 */
Ext.ux.App.ImageBrowser.view.Help = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    title: "Image Browser Help",
    html: [
      {tag: 'h1', html: 'Image Browser Help'},
      {tag: 'p',  html: 'The Image Browser application displays all uploaded images, as well as allowing you to upload new images.  You can also edit the details or delete existing images'},
      Ext.ux.App.view.GenericHelpWindow.keyboardShortcuts(Ext.ux.App.ImageBrowser.Image)
    ]
  });
  
  Ext.ux.App.ImageBrowser.view.Help.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ImageBrowser.view.Help, Ext.ux.App.view.GenericHelpWindow);
Ext.reg('image_manager_help', Ext.ux.App.ImageBrowser.view.Help);