Ext.ux.App.VoucherManager.view.FormFields = function() {
  return [
    {
      xtype:      'textfield',
      anchor:     '-15',
      fieldLabel: 'Code',
      name:       'voucher[code]'
    },
    {
      xtype:      'textfield',
      anchor:     '-15',
      fieldLabel: 'Amount',
      name:       'voucher[amount]'
    },
    {
      xtype:      'textfield',
      anchor:     '-15',
      fieldLabel: 'Percentage',
      name:       'voucher[percentage]'
    }
  ];
};