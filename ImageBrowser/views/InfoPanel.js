/**
 * Ext.ux.App.ImageBrowser.view.InfoPanel
 * @extends Ext.Panel
 * Provides information about the selected image and a form to update it
 */
Ext.ux.App.ImageBrowser.view.InfoPanel = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, { model: Ext.ux.App.ImageBrowser.Image});
  
  //keep a reference to the currently displayed image to avoid refreshing the panel unnecessarily
  this.currentImageId = 0;
    
  this.template = new Ext.Template(
    '<div class="image-information">',
      '<div class="image-preview">',
        '<img src="{thumb_filename}" title="{title}" />',
      '</div>',
      '<dl class="image-attributes">',
        '<dt>Title:</dt>',
        '<dd>{title}</dd>',
        '<dt>Filename:</dt>',
        '<dd>{filename}</dd>',
        '<dt>File Size:</dt>',
        '<dd>{size} bytes</dd>',
        '<dt>Image Size:</dt>',
        '<dd>{width}px x {height}px</dd>',
        '<dt>Description:</dt>',
        '<dd>{description}</dd>',
      '</dl>',
    '</div>'
  );
  this.template.compile();
  
  this.infoPanel = new Ext.Panel();
  
  Ext.applyIf(config, {
    split:       true,
    width:       180,
    title:       'Information',
    region:      'east',
    layout:      'fit',
    collapsible: true,
    items:       [this.infoPanel]
  });
  
  Ext.ux.App.ImageBrowser.view.InfoPanel.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ImageBrowser.view.InfoPanel, Ext.Panel, {
  /**
   * Updates the information and thumbnail based on the given Image record
   */
  updateInfo: function(record) {
    //don't refresh the panel if we're already showing this image
    if (this.currentImageId == record.data.id) { return;};
    
    this.infoPanel.getEl().hide();
    this.template.overwrite(this.infoPanel.getEl(), record.data);
    this.infoPanel.getEl().slideIn('l', {stopFx:true,duration:.2});
    
    //keep a reference to the newly displayed image ID
    this.currentImageId = record.data.id;
  }
});


Ext.reg('image_browser_info_panel', Ext.ux.App.ImageBrowser.view.InfoPanel);