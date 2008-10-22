Ext.ux.App.SiteManager.Site = new Ext.ux.MVC.model.Base('site', {
  fields: [
    { name: 'id',                    type: 'int'},
    { name: 'title',                 type: 'string'},
    { name: 'host',                  type: 'string'},
    { name: 'analytics_id',          type: 'string'},
    { name: 'alternative_hosts',     type: 'string'},
    { name: 'front_page_main_link',  type: 'string'},
    { name: 'front_page_small_link', type: 'string'}
  ],
  
  singleDataUrl: function() {
    return '/admin/sites.ext_json';
  }
});