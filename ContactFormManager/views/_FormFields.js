Ext.ux.App.ContactFormManager.view.FormFields = function() {
  return [
    { 
      xtype:      'textfield', 
      fieldLabel: 'Name',        
      name:       'contact[name]',
      anchor:     "-20"
    },
    { 
      xtype:      'textfield', 
      fieldLabel: 'Email',       
      name:       'contact[email]',
      anchor:     "-20"
    },
    { 
      xtype:      'textfield', 
      fieldLabel: 'Website',     
      name:       'contact[website]',
      anchor:     "-20"
    },
    { 
      xtype:      'textfield', 
      fieldLabel: 'Phone',       
      name:       'contact[phone]',
      anchor:     "-20"
    },
    { 
      xtype:      'textfield', 
      fieldLabel: 'Company',     
      name:       'contact[company]',
      anchor:     "-20"
    },
    { 
      xtype:      'textarea', 
      fieldLabel: 'Message',     
      name:       'contact[message]',
      anchor:     "-20 -130"
    }
  ];
};