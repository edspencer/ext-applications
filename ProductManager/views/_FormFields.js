Ext.ux.App.ProductManager.view.FormFields = function(id) {
  var items = [
    {
      layout: 'column',
      items: [
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            { 
              fieldLabel: 'Title',
              name:       'product[title]',
              xtype:      'textfield',
              anchor:     "-15"
            },
            {
              layout: 'column',
              items: [
                {
                  columnWidth: .5,
                  layout: 'form',
                  items: [
                    {
                      fieldLabel: 'Price', 
                      name:       'product[price]',
                      xtype:      'textfield',
                      width:      80
                    }
                  ]
                },
                {
                  columnWidth: .5,
                  layout: 'form',
                  items: [
                    {
                      fieldLabel: 'Previous price',
                      name:       'product[previous_price]',
                      xtype:      'textfield',
                      width:      80
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            { 
              fieldLabel: 'Feature strapline', 
              name:       'product[feature_strapline]', 
              xtype:      'textfield', 
              anchor:     "-15"
            },
            {
              layout: 'column',
              items: [
                {
                  columnWidth: .5,
                  layout: 'form',
                  items: [
                    {
                      xtype:      'checkbox',
                      fieldLabel: 'Is available', 
                      name:       'product[is_available]',
                      inputValue: '1'
                    },
                    {
                      xtype: 'hidden',
                      name:  'product[is_available]',
                      value: '0'
                    }
                  ]
                },
                {
                  columnWidth: .5,
                  layout: 'form',
                  items: [
                    { 
                      xtype:      'checkbox',
                      fieldLabel: 'Is featured', 
                      name:       'product[is_featured]',
                      inputValue: '1'
                    },
                    {
                      xtype: 'hidden',
                      name:  'product[is_featured]',
                      value: '0'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      layout: 'form',
      labelAlign: 'top',
      items: [
        {
          fieldLabel: 'Description',
          name:       'product[description]',
          xtype:      'htmleditor',
          anchor:     "-15"
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
  
  return items;
};