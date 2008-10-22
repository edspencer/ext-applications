Ext.ux.App.SiteManager.view.FormFields = function() {
  return [
    {
      xtype:      'textfield',
      name:       'site[title]',
      fieldLabel: 'Site Title',
      anchor:     "-15"
    },
    {
      xtype:      'textfield',
      name:       'site[front_page_main_link]',
      fieldLabel: 'Front Page large image link URL',
      anchor:     "-15"
    },
    {
      xtype:      'textfield',
      name:       'site[front_page_small_link]',
      fieldLabel: 'Front Page small image link URL',
      anchor:     "-15"
    }
  ];
};