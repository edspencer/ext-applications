Ext.ux.App.CategoryManager.Category = new Ext.ux.MVC.model.Base('category', {
  fields: [
    { name: 'id',          type: 'int'},
    { name: 'title',       type: 'string'},
    { name: 'lft',         type: 'int'},
    { name: 'rgt',         type: 'int'},
    { name: 'created_at',  type: 'string'},
    { name: 'updated_at',  type: 'string'},
    { name: 'description', type: 'string'},
    { name: 'url_param',   type: 'string'}
  ],
  plural_name: 'categories',
  url_name:    'categories'
});
