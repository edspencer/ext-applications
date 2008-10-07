Ext.ux.App.DesignerManager.view.FormFields = function() {
  return [
    {
      xtype:      'textfield',
      fieldLabel: 'Name', 
      name:       'designer[name]'
    },
    {
      xtype:      'htmleditor',
      fieldLabel: 'Description',
      name:       'designer[description]',
      anchor:     "-15 -50"
    }
  ];
};