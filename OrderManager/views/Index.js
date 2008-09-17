/**
 * Ext.ux.App.OrderManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for Order Manager
 */
Ext.ux.App.OrderManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    iconCls: 'order',
    title:   'Order Manager',
    width:   900,
    height:  550,
    
    gridConfig: {
      model:   Ext.ux.App.OrderManager.Order,
      columns: Ext.ux.App.OrderManager.view.GridColumns()
    }
  });
  
  Ext.ux.App.OrderManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.OrderManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('order-manager_index', Ext.ux.App.OrderManager.view.Index);