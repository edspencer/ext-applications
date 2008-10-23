Ext.ux.App.VoucherManager.view.FormFields = function() {
  return [
    {
      xtype:      'textfield',
      anchor:     '-15',
      fieldLabel: 'Code',
      name:       'voucher[code]'
    },
    {
      layout: 'column',
      items: [
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:      'textfield',
              anchor:     '-15',
              fieldLabel: 'Amount',
              name:       'voucher[amount]'
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:      'textfield',
              anchor:     '-15',
              fieldLabel: 'OR percentage',
              name:       'voucher[percentage]'
            }
          ]
        }
      ]
    },
    {
      xtype: 'checkbox',
      fieldLabel: 'Single use?',
      name: 'voucher[single_use]',
      inputValue: '1'
    },
    {
      xtype: 'hidden',
      name: 'voucher[single_use]',
      value: '0'
    },
    {
      layout: 'column',
      items: [
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:      'datefield',
              name:       'voucher[expires_at_date]',
              fieldLabel: 'Expires at',
              format:     'd/m/Y'
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:      'timefield',
              name:       'voucher[expires_at_time]',
              hideLabel:  true
            }
          ]
        }
      ]
    }
  ];
};