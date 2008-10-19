/**
 * Ext.ux.App.ImageBrowser.view.Index
 * @extends Ext.Window
 * Provides viewing, searching and sorting of uploaded images
 */
Ext.ux.App.ImageBrowser.view.Index = function(config) {
  var config = config || {};
  
  this.model = Ext.ux.App.ImageBrowser.Image;
  
  this.mainPanel = new Ext.ux.App.ImageBrowser.view.DataViewPanel();
  this.infoPanel = new Ext.ux.App.ImageBrowser.view.InfoPanel();
  
  Ext.applyIf(config, {
    id:      'image-browser-index',
    iconCls: 'image',
    title:   'Image Browser',
    layout:  'border',
    height:  600,
    width:   820,
    items:   [this.mainPanel, this.infoPanel]
  });
  
  Ext.ux.App.ImageBrowser.view.Index.superclass.constructor.call(this, config);
  
  //we need to give mainPanel a reference to this.controller so that it can open the upload window
  this.mainPanel.controller = this.controller;
  
  this.mainPanel.dataView.on('selectionchange', this.updateInfoPanel, this);
  this.mainPanel.dataView.on('dblclick', this.editImage, this);
};

Ext.extend(Ext.ux.App.ImageBrowser.view.Index, Ext.Window, {
  /**
   * Instructs the info panel to update its information with the passed record.
   * Intended to be attached to the DataView's selectionchange event
   */
  updateInfoPanel: function(dataview, selections) {
    var record = this.currentlySelectedImage();
    if (record) {
      this.infoPanel.updateInfo(record);
    };
  },
  
  /**
   * Opens the edit window for this image.  Intended to be attached to the DataView's dblclick event
   */
  editImage: function(dataview, index, node, event) {
    var record = this.currentlySelectedImage();
    if (record) {
      this.controller.callAction('edit', [record.data.id], {
        listeners: {
          'save': {
            scope: this,
            fn:    function() {this.mainPanel.dataView.store.reload();}
          }
        }
      });
    };    
  },
  
  currentlySelectedImage: function() {
    return this.mainPanel.dataView.getSelectedRecords()[0];
  }
});

Ext.reg('image_browser_window', Ext.ux.App.ImageBrowser.view.Index);