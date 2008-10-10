Ext.ux.App.UserManager.view.FormFields = function() {
  return [
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
              fieldLabel: 'Login (username)',
              name:       'user[login]'
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
              fieldLabel: 'Email Address',
              name:       'user[email]'
            }
          ]
        }
      ]
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
              anchor:     "-15",
              fieldLabel: 'First Name',
              name:       'user[first_name]'
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:      'textfield',
              anchor:     "-15",
              fieldLabel: 'Last Name',
              name:       'user[last_name]'
            }
          ]
        }
      ]
    },
    {
      layout: 'column',
      items: [
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              fieldLabel: 'Password',
              name:       'user[password]',
              xtype:      'textfield',
              inputType:  'password',
              anchor:     '-15'
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              fieldLabel: 'Confirm Password',
              name:       'user[password_confirmation]',
              xtype:      'textfield',
              inputType:  'password',
              anchor:     '-15'
            }
          ]
        }
      ]
    }
  ];
};