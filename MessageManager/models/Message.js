Ext.ux.App.MessageManager.Message = new Ext.ux.MVC.model.Base('message', {
  fields: [
    { name: 'id',         type: 'int'},
    { name: 'title',      type: 'string'},
    { name: 'content',    type: 'string'},
    { name: 'created_at', type: 'string'},
    { name: 'updated_at', type: 'string'}
  ],
  url_namespace: '',
  url_extension: '.json'
});