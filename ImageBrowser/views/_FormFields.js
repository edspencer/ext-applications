Ext.ux.App.ImageBrowser.view.FormFields = function() {
  return [
    {
      fieldLabel: 'Title',
      name:       'image[title]'
    },
    {
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