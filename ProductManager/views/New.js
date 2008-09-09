/**
 * Ext.ux.App.ProductManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Product Manager new Product form window
 */
Ext.ux.App.ProductManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.ProductManager.Product,
    formConfig: {
      defaults: {xtype: null, anchor: null},
      items: Ext.ux.App.ProductManager.view.FormFields()
    }
  });
  
  Ext.ux.App.ProductManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ProductManager.view.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('product-manager_new', Ext.ux.App.ProductManager.view.New);