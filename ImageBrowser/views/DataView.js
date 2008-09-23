/**
 * Ext.ux.App.ImageBrowser.view.DataView
 * @extends Ext.DataView
 * Displays images uploaded to the server
 */
Ext.ux.App.ImageBrowser.view.DataView = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, { model: Ext.ux.App.ImageBrowser.Image});
    
  this.template = new Ext.XTemplate(
    '<tpl for=".">',
      '<div class="thumb-wrap" id="image-{id}">',
      '<div class="thumb"><img src="{thumb_filename}" class="thumb-img"></div>',
      '<span>{title}</span></div>',
    '</tpl>'
  );
  
  this.store = config.model.collectionStore({autoLoad: true});
  
  Ext.applyIf(config, {
    itemSelector: 'div.thumb-wrap',
    style:        'overflow: auto',
    overClass:    'x-view-over',
    emptyText:    'No images to display',
    singleSelect: true,
    multiSelect:  false,
    store:        this.store,
    tpl:          this.template,
    autoHeight:   true
  });
  
  Ext.ux.App.ImageBrowser.view.DataView.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ImageBrowser.view.DataView, Ext.DataView);
