Ext.ux.App.OrderManager.view.FormFields = function() {
  
  var fields = [
    {
      layout: 'column',
      items: [
        {
          columnWidth: .5,
          bodyStyle: 'padding: 0 5px;',
          layout: 'form',
          items: [
            {
              xtype: 'fieldset',
              title: 'Customer Details',
              defaults: {xtype: 'textfield', anchor: "-20"},
              items: [
                { fieldLabel: 'Title',      name: 'order[title]', width: 100},
                { fieldLabel: 'First name', name: 'order[first_name]'},
                { fieldLabel: 'Last name',  name: 'order[last_name]'},
                { fieldLabel: 'Phone',      name: 'order[phone]'},
                { fieldLabel: 'Email',      name: 'order[email]'}
              ]
            },
            {
              xtype: 'fieldset',
              title: 'Billing',
              defaults: {xtype: 'textfield', anchor: "-20"},
              items: [
                { fieldLabel: 'Address 1', name: 'order[address_1]'},
                { fieldLabel: 'Address 2', name: 'order[address_2]'},
                { fieldLabel: 'Town',      name: 'order[town]'},
                { fieldLabel: 'County',    name: 'order[county]'},
                { fieldLabel: 'Country',   name: 'order[country]'},
                { fieldLabel: 'Postcode',  name: 'order[postcode]'}
              ]
            }
          ]
        },
        {
          columnWidth: .5,
          bodyStyle: 'padding: 0 5px;',
          layout: 'form',
          items: [
            {
              xtype: 'fieldset',
              title: 'Delivery',
              defaults: {xtype: 'textfield', anchor: "-20"},
              items: [
                { fieldLabel: 'Delivery Date', name: 'order[delivery_date]', width: 100, disabled: true},
                { fieldLabel: 'Address 1',     name: 'order[delivery_address_1]'},
                { fieldLabel: 'Address 2',     name: 'order[delivery_address_2]'},
                { fieldLabel: 'Town',          name: 'order[delivery_town]'},
                { fieldLabel: 'County',        name: 'order[delivery_county]'},
                { fieldLabel: 'Postcode',      name: 'order[delivery_postcode]'},
                { fieldLabel: 'Access',        name: 'order[alternative_access]', xtype: 'textarea', height: 190}
              ]
            }
          ]
        }
      ]
    }
  ];
  
  return fields;
};