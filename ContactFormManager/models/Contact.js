Ext.ux.App.ContactFormManager.Contact = new Ext.ux.MVC.model.Base('contact', {
  fields: [
    { name: 'id',          type: 'int'},
    { name: 'name',        type: 'string'},
    { name: 'website',     type: 'string'},
    { name: 'phone',       type: 'string'},
    { name: 'email',       type: 'string'},
    { name: 'message',     type: 'string'},
    { name: 'is_resolved', type: 'string'},
    { name: 'site_id',     type: 'string'},
    { name: 'company',     type: 'string'}
  ]
});