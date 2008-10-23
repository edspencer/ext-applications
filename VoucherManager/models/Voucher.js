Ext.ux.App.VoucherManager.Voucher = new Ext.ux.MVC.model.Base('voucher', {
  fields: [
    { name: 'id',         type: 'int'},

    { name: 'percentage', type: 'string'},
    { name: 'amount',     type: 'string'},
    { name: 'code',       type: 'string'},
    { name: 'used_at',    type: 'string'},
    { name: 'created_at', type: 'string'},
    { name: 'updated_at', type: 'string'}
  ]
});