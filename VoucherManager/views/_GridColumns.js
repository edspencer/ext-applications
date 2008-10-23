Ext.ux.App.VoucherManager.view.GridColumns = function() {
  return [
    { header: 'Code',         dataIndex: 'code',       type: 'string'},
    { header: 'Percentage',   dataIndex: 'percentage', type: 'string'},
    { header: 'Amount',       dataIndex: 'amount',     type: 'string'},
    { header: 'Used at',      dataIndex: 'used_at',    type: 'string'},
    { header: 'Created',      dataIndex: 'created_at', type: 'string', hidden: true},
    { header: 'Last Updated', dataIndex: 'updated_at', type: 'string', hidden: true}
  ];
};