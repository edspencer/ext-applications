/**
 * Ext.ux.App.ProductManager.view.Colour.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Allows for the addition of a new Colour
 */
Ext.ux.App.ProductManager.view.Colour.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:     Ext.ux.App.ProductManager.Colour,
    
    modal:     true,
    resizable: false,
    width:     220,
    height:    150,
    
    formConfig: {
      labelWidth: 50,
      items:      Ext.ux.App.ProductManager.view.Colour.FormFields()
    }
  });
  
  Ext.ux.App.ProductManager.view.Colour.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ProductManager.view.Colour.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('product_manager_new_colour', Ext.ux.App.ProductManager.view.Colour.New);
