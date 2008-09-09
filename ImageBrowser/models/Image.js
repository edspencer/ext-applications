Ext.ux.App.ImageBrowser.Image = new Ext.ux.MVC.model.Base('image', {
  fields: [
    {name: 'id',              type: 'int'},
    {name: 'title',           type: 'string'},
    {name: 'description',     type: 'string'},
    {name: 'public_filename', type: 'string'},
    {name: 'thumb_filename',  type: 'string'},
    {name: 'content_type',    type: 'string'},
    {name: 'height',          type: 'int'},
    {name: 'width',           type: 'int'},
    {name: 'created_at',      type: 'string'},
    {name: 'updated_at',      type: 'string'},
    {name: 'filename',        type: 'string'},
    {name: 'product'}
  ]
});