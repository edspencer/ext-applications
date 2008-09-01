Ext.ux.App.ImageBrowser.view.FormFields = function() {
  return [
    {
      fieldLabel: 'Title',
      name: 'image[title]',
      id: 'title'
    },
    {
      fieldLabel: 'Caption',
      name: 'image[caption]',
      id: 'caption'
    },
    {
      xtype: 'textarea',
      fieldLabel: 'Description',
      name: 'image[description]',
      id: 'description',
      anchor: "-15 -90"
    }
  ];
};