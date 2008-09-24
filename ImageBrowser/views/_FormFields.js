Ext.ux.App.ImageBrowser.view.FormFields = function() {
  return [
    {
      xtype:      'textfield',
      fieldLabel: 'Title',
      name:       'image[title]'
    },
    {
      xtype:      'textfield',
      fieldLabel: 'Caption',
      name:       'image[caption]'
    },
    {
      xtype:      'textarea',
      fieldLabel: 'Description',
      name:       'image[description]',
      anchor:     "-15 -90"
    }
  ];
};