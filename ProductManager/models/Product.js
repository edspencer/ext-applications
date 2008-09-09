Ext.ux.App.ProductManager.Product = new Ext.ux.MVC.model.Base('product', {
  fields: [
    { name: 'id',                type: 'int'},
    { name: 'title',             type: 'string'},
    { name: 'description',       type: 'string'},
    { name: 'price',             type: 'string'},
    { name: 'created_at',        type: 'string'},
    { name: 'updated_at',        type: 'string'},
    { name: 'is_available',      type: 'string'},
    { name: 'meta_description',  type: 'string'},
    { name: 'meta_keywords',     type: 'string'},
    { name: 'url_param',         type: 'string'},
    { name: 'is_featured',       type: 'string'},
    { name: 'feature_strapline', type: 'string'},
    { name: 'previous_price',    type: 'string'}
  ]
});