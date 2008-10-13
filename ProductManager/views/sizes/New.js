/**
 * Ext.ux.App.ProductManager.view.Size.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Allows for the addition of a new Size
 */
Ext.ux.App.ProductManager.view.Size.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:     Ext.ux.App.ProductManager.Size,
    
    modal:     true,
    resizable: false,
    width:     220,
    height:    100,
    
    formConfig: {
      labelWidth: 50,
      items:      Ext.ux.App.ProductManager.view.Size.FormFields()
    }
  });
  
  Ext.ux.App.ProductManager.view.Size.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ProductManager.view.Size.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('product_manager_new_size', Ext.ux.App.ProductManager.view.Size.New);
