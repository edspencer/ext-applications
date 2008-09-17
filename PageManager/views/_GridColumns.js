Ext.ux.App.PageManager.view.GridColumns = function() {
  return [
    { header: 'Title',        dataIndex: 'title',       type: 'string'},
    { header: 'Url',          dataIndex: 'url',         type: 'string'},
    { header: 'Description',  dataIndex: 'description', type: 'string'},
    { header: 'Keywords',     dataIndex: 'keywords',    type: 'string'},
    { header: 'Created',      dataIndex: 'created_at',  type: 'string', hidden: true},
    { header: 'Last Updated', dataIndex: 'updated_at',  type: 'string', hidden: true}
  ];
};