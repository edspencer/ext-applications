/**
 * Ext.ux.App.ImageBrowser.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Description
 */
Ext.ux.App.ImageBrowser.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Image,
    formConfig: {
      items: Ext.ux.App.ImageBrowser.view.FormFields()
    }
  });
  
  Ext.ux.App.ImageBrowser.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ImageBrowser.view.Edit, Ext.ux.App.view.DefaultEditWindow);
