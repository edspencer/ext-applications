Ext.ux.App.PageManager.view.FormFields = function() {
  return [
    {
      layout: 'column',
      items: [
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype:      'textfield',
              fieldLabel: 'Title',
              name:       'page[title]',
              anchor:     '96%'
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            { 
              xtype:      'textfield',
              fieldLabel: 'Url', 
              name:       'page[url]',
              anchor:     '96%'
            }
          ]
        }
      ]
    },
    {
      xtype:      'textarea',
      fieldLabel: 'Content',
      name:       'page[content]',
      anchor:     '98%',
      height:     '300',
      cls:        'mceEditor'
    },
    {
      xtype:      'textarea',
      fieldLabel: 'Meta Description', 
      name:       'page[description]',
      anchor:     '98%'
    },
    {
      xtype:      'textarea',
      fieldLabel: 'Meta Keywords',
      name:       'page[keywords]',
      anchor:     '98%'
    }
  ];
};