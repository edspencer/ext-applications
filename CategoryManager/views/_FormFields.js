Ext.ux.App.CategoryManager.view.FormFields = function(id) {
  return [
    {
      xtype:      'textfield',
      fieldLabel: 'Title', 
      name:       'category[title]'
    },
    {
      xtype:      'htmleditor',
      fieldLabel: 'Description',
      name:       'category[description]',
      anchor:     "-15 -50"
    }
  ];
};