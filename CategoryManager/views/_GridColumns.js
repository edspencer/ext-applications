Ext.ux.App.CategoryManager.view.GridColumns = function() {
  return [
    { header: 'Title',       dataIndex: 'title',       type: 'string'},
    { header: 'Created at',  dataIndex: 'created_at',  type: 'string', hidden: true},
    { header: 'Updated at',  dataIndex: 'updated_at',  type: 'string', hidden: true},
    { header: 'Description', dataIndex: 'description', type: 'string'},
    { header: 'Url Name',    dataIndex: 'url_param',   type: 'string'}
  ];
};