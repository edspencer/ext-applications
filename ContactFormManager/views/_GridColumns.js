Ext.ux.App.ContactFormManager.view.GridColumns = function() {
  return [
    { header: 'Received',     dataIndex: 'created_at',  type: 'string'},
    { header: 'Last Updated', dataIndex: 'updated_at',  type: 'string', hidden: true},
    { header: 'Name',         dataIndex: 'name',        type: 'string'},
    { header: 'Email',        dataIndex: 'email',       type: 'string'},
    { header: 'Website',      dataIndex: 'website',     type: 'string', hidden: true},
    { header: 'Phone',        dataIndex: 'phone',       type: 'string'},
    { header: 'Message',      dataIndex: 'message',     type: 'string'},
    { header: 'Is resolved',  dataIndex: 'is_resolved', type: 'string'},
    { header: 'Company',      dataIndex: 'company',     type: 'string', hidden: true},
    { header: 'Subject',      dataIndex: 'subject',     type: 'string', hidden: true}
  ];
};