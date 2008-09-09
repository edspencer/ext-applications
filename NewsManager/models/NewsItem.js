Ext.ux.App.NewsManager.NewsItem = new Ext.ux.MVC.model.Base('news_item', {
  fields: [
    { name: 'id',                type: 'int'},
    { name: 'title',             type: 'string'},
    { name: 'content',           type: 'string'},
    { name: 'published_at',      type: 'string'},
    { name: 'published_at_date', type: 'string'},
    { name: 'published_at_time', type: 'string'},
    { name: 'is_published',      type: 'string'}
  ]
});