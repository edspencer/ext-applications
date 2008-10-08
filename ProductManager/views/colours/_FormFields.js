Ext.ux.App.ProductManager.view.Colour.FormFields = function() {
  return [
    {
      xtype:      'textfield',
      name:       'colour[name]',
      fieldLabel: 'Name',
      anchor:     "-15"
    },
    {
      xtype:      'textfield',
      name:       'colour[hex_value]',
      fieldLabel: 'Colour',
      anchor:     "-15"
    }
  ];
};