/**
 * Ext.ux.App.ProductManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for Product Manager
 */
Ext.ux.App.ProductManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    iconCls: 'product',
    title:   'Product Manager',
    
    gridConfig: {
      model:   Ext.ux.App.ProductManager.Product,
      columns: Ext.ux.App.ProductManager.view.GridColumns()
    }
  });
  
  Ext.ux.App.ProductManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ProductManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('product-manager_index', Ext.ux.App.ProductManager.view.Index);