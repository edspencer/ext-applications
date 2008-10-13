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
    autoHeight:   true,
    loadMask:     true
  });
  
  Ext.ux.App.ImageBrowser.view.DataView.superclass.constructor.call(this, config);
  
  this.on('render', this.initializeDragZone, this);
};

Ext.extend(Ext.ux.App.ImageBrowser.view.DataView, Ext.DataView, {
  /**
   * Sets up each item in the DataView as a draggable element
   */
  initializeDragZone: function() {
    this.dragZone = new Ext.dd.DragZone(this.getEl(), {
      
      getDragData: function(e) {
        var sourceEl = e.getTarget('div.thumb-wrap', 10);
        
        if (sourceEl) {
          var draggable = sourceEl.cloneNode(true);
          
          var imageId = sourceEl.id.split("-")[1];
          
          draggable.id = Ext.id();
          
          return this.dragData = {
            sourceEl:  sourceEl,
            repairXY:  Ext.fly(sourceEl).getXY(),
            ddel:      draggable,
            imageData: {id: imageId},
            
            shortcutConfig: {
              text: 'Image',
              icon: '/images/icons/48x48/accept.png',
              launchConfig: {
                
              }
            }
          };
        };
      },
      
      getRepairXY: function() {
        return this.dragData.repairXY;
      }
      
    });
  }
});