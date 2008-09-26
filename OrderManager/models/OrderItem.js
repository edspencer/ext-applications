Ext.ux.App.OrderManager.OrderItem = new Ext.ux.MVC.model.Base('order_item', {
  fields: [
    { name: 'id',         type: 'int'},
    { name: 'order_id',   type: 'int'},
    { name: 'product_id', type: 'int'},
    { name: 'created_at', type: 'string'},
    { name: 'updated_at', type: 'string'},
    { name: 'title',      type: 'string'},
    { name: 'price',      type: 'string'},
    { name: 'quantity',   type: 'int'}
  ],
  collectionDataUrl: function(config) {
    return this.namespacedUrl('orders/' + config.order_id + '/order_items');
  }
});