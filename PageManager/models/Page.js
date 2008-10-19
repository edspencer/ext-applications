Ext.ux.App.PageManager.Page = new Ext.ux.MVC.model.Base('page', {
  fields: [
    { name: 'id',          type: 'int'},
    { name: 'title',       type: 'string'},
    { name: 'url',         type: 'string'},
    { name: 'content',     type: 'string'},
    { name: 'description', type: 'string'},
    { name: 'keywords',    type: 'string'},
    { name: 'layout',      type: 'string'},
    { name: 'created_at',  type: 'string'},
    { name: 'updated_at',  type: 'string'}
  ]
});