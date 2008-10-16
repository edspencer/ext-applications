Ext.ux.App.NewsManager.view.GridColumns = function() {
  return [
    { header: 'Title',        dataIndex: 'title',        type: 'string'},
    { header: 'Is published', dataIndex: 'is_published', type: 'string'},
    { header: 'Content',      dataIndex: 'content',      type: 'string', hidden: true},
    { header: 'Published at', dataIndex: 'published_at', type: 'string'},
    { header: 'Created at',   dataIndex: 'created_at',   type: 'string', hidden: true},
    { header: 'Last Updated', dataIndex: 'updated_at',   type: 'string', hidden: true}
  ];
};