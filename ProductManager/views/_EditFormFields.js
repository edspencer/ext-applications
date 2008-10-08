Ext.ux.App.ProductManager.view.EditFormFields = function(id) {
  return [
    {
      layout: 'column',
      items: [
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:      'image_associator',
              model:      Ext.ux.App.ProductManager.Product,
              imageModel: Ext.ux.App.ImageBrowser.Image,
              objectId:   id,
              anchor:     "-10"
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:      'category_associator',
              objectId:   id,
              anchor:     "-20"
            }
          ]
        }
      ]
    },
    {
      layout: 'column',
      bodyStyle: 'padding: 10px 0;',
      items: [
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:    'colour_associator',
              objectId: id,
              anchor:   "-10"
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:    'size_associator',
              objectId: id,
              anchor:   "-20"
            }
          ]
        }
      ]
    }
  ];
};