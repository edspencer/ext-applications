Ext.ux.App.NewsManager.view.FormFields = function() {
  return [
    {
      layout: 'column',
      items: [
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            { 
              fieldLabel: 'Title',
              name:       'news_item[title]',
              xtype:      'textfield',
              anchor:     "-15"
            }
          ]
        },
        {
          columnWidth: .5,
          layout: 'form',
          items: [
            {
              xtype: 'checkbox',
              fieldLabel: 'Publish now?',
              name: 'news_item[is_published]',
              inputValue: '1',
              id: 'is_published'
            },
            {
              xtype: 'hidden',
              name: 'news_item[is_published]',
              value: '0'
            }
          ]
        }
      ]
    },
    {
      xtype:      'textarea',
      fieldLabel: 'Content',
      name:       'news_item[content]',
      anchor:     '98% -60',
      cls:        'mceEditor'
    }
  ];
};