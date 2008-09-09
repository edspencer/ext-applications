Ext.ux.App.ProductManager.view.FormFields = function() {
  var mainTab = [
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
    }
  ];
  
  
  var detailsTab = [
    {
      xtype: 'fieldset',
      title: 'Meta Content - used for SEO purposes',
      layout: 'fit',
      items: [
        {
          layout: 'column',
          items: [
            {
              columnWidth: .5,
              layout: 'form',
              labelAlign: 'top',
              items: [
                { 
                  fieldLabel: 'Meta description',
                  name:       'product[meta_description]',
                  xtype:      'textarea',
                  height:     300,
                  anchor:     "-15"
                }
              ]
            },
            {
              columnWidth: .5,
              layout: 'form',
              labelAlign: 'top',
              items: [
                {
                  fieldLabel: 'Meta keywords',
                  name:       'product[meta_keywords]',
                  xtype:      'textarea',
                  height:     300,
                  anchor:     "-15"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  var tabs = {
    xtype:    'tabpanel',
    activeTab: 0,
    defaults: {
      autoHeight: true,
      cls:        'x-panel-mc',
      bodyStyle:  'padding: 5px 0 10px 10px; background-color: #fff;'
    },
    border:     false,
    bodyBorder: false,
    items: [
      {
        title:  'Product Details',
        layout: 'form',
        items:  mainTab
      },
      {
        title:  'Additional Details',
        items:  detailsTab
      }
    ]
  };
  
  return tabs;
};