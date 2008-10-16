/**
 * Ext.ux.App.ImageBrowser.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Description
 */
Ext.ux.App.ImageBrowser.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.ImageBrowser.Image,
    formConfig: {
      fileUpload: true,
      defaults: {xtype: null},
      items: [
        {
          xtype:      'textfield',
          inputType:  'file',
          fieldLabel: 'File',
          name:       'image[uploaded_data]',
          id:         'uploaded_data'
        }
      ].concat(Ext.ux.App.ImageBrowser.view.FormFields())
    }
  });
  
  Ext.ux.App.ImageBrowser.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ImageBrowser.view.New, Ext.ux.App.view.DefaultNewWindow);
