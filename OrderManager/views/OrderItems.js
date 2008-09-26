/**
 * Ext.ux.App.OrderManager.view.OrderItems
 * @extends Ext.grid.GridPanel
 * Displays the order items linked to an Order
 */
Ext.ux.App.OrderManager.view.OrderItems = function(config) {
  var config = config || {};
  if (!config.objectId) {throw new Error("You must provide an objectId to the Order Items grid");}
  Ext.applyIf(config, {model: Ext.ux.App.OrderManager.OrderItem});
  
  this.objectId = config.objectId;
  this.model    = config.model;
  
  function pounds(value) {
    return "&pound;" + value;
  };
  
  function renderLinePrice(value, p, record) {
    return pounds(record.data.quantity * record.data.price);
  };
  
  this.columnModel = new Ext.grid.ColumnModel([
    {header: 'Product Title', dataIndex: 'title', id: 'title'},
    {header: 'Quantity',      dataIndex: 'quantity'},
    {header: 'Unit Price',    dataIndex: 'price', renderer: pounds},
    {header: 'Line Price',    dataIndex: 'price', renderer: renderLinePrice}
  ]);
  
  this.columnModel.defaultSortable = true;
  this.columnModel.defaultWidth = 160;
  
  Ext.applyIf(config, {
    store:            this.model.collectionStore({order_id: this.objectId}),
    cm:               this.columnModel,
    title:            'Order Items',
    iconCls:          'order',
    autoHeight:       true,
    style:            'padding: 0 5px;',
    bodyStyle:        'border: 1px solid #99BBE8;',
    autoExpandColumn: 'title'
  });
  
  Ext.ux.App.OrderManager.view.OrderItems.superclass.constructor.call(this, config);
  
  config.store.load();
};
Ext.extend(Ext.ux.App.OrderManager.view.OrderItems, Ext.grid.GridPanel);
Ext.reg('order_items_grid', Ext.ux.App.OrderManager.view.OrderItems);