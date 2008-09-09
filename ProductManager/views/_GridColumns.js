Ext.ux.App.ProductManager.view.GridColumns = function() {
  return [
    { header: 'Title',             dataIndex: 'title',             type: 'string'},
    { header: 'Description',       dataIndex: 'description',       type: 'string'},
    { header: 'Price',             dataIndex: 'price',             type: 'string'},
    { header: 'Is available',      dataIndex: 'is_available',      type: 'string'},
    { header: 'Is featured',       dataIndex: 'is_featured',       type: 'string'},
    { header: 'Created at',        dataIndex: 'created_at',        type: 'string', hidden: true},
    { header: 'Updated at',        dataIndex: 'updated_at',        type: 'string', hidden: true},
    { header: 'Meta description',  dataIndex: 'meta_description',  type: 'string', hidden: true},
    { header: 'Meta keywords',     dataIndex: 'meta_keywords',     type: 'string', hidden: true},
    { header: 'Feature strapline', dataIndex: 'feature_strapline', type: 'string', hidden: true}
  ];
};