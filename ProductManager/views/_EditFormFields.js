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
              xtype:         'category_associator',
              model:         Ext.ux.App.ProductManager.Product,
              categoryModel: Ext.ux.App.CategoryManager.Category,
              objectId:      id,
              anchor:        "-15"
            }
          ]
        }
      ]
    }
  ];
};