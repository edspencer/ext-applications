Ext.ux.App.DesignerManager.view.FormFields = function(id) {
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