Ext.ux.App.ContactManager.Contact = new Ext.ux.MVC.model.Base('contact', {
  fields: [
    { name: 'id', type: 'int'},

    { name: 'created_at', type: 'string'},
    { name: 'updated_at', type: 'string'},
    { name: 'name', type: 'string'},
    { name: 'email', type: 'string'},
    { name: 'website', type: 'string'},
    { name: 'phone', type: 'string'},
    { name: 'message', type: 'string'},
    { name: 'is_resolved', type: 'string'},
    { name: 'company', type: 'string'},
    { name: 'subject', type: 'string'}
  ]
});