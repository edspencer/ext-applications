/**
 * Ext.ux.App.ImageBrowser.view.DataViewPanel
 * @extends Ext.Panel
 * Displays the images DataView with searching and sorting
 */
Ext.ux.App.ImageBrowser.view.DataViewPanel = function(config) {
  var config = config || {};
  Ext.applyIf(config, {model: Ext.ux.App.ImageBrowser.Image});
  this.model = config.model;
  
  this.dataView = new Ext.ux.App.ImageBrowser.view.DataView();
  
  this.searcher = new Ext.app.SearchField({
    width:           170,
    enableKeyEvents: true,
    listeners:       {
      'keydown': {
        fn: function(f, e) { e.stopPropagation();}
      }
    }
  });

  this.sortOptions = [
    ['title',      'Name'],
    ['created_at', 'Date Uploaded']
  ];
  
  this.sorter = new Ext.form.ComboBox({
    store:         this.sortOptions,
    editable:      false,
    triggerAction: 'all',
    mode:          'local',
    lazyInit:      false,
    typeAhead:     true,
    width:         100,
    listeners:     {
      'select': { scope: this, fn: this.sort }
    }
  });
  
  this.deleteButton = new Ext.Toolbar.Button({
    text:     'Delete Selected',
    iconCls:  'delete',
    disabled: true,
    handler:  this.deleteSelected,
    scope:    this
  });
  
  this.tbar = new Ext.Toolbar({
    items: [
      {text: 'Search:'},  this.searcher,
      {text: 'Sort by:'}, this.sorter,
      '-',
      {
        text:    'Upload an image',
        iconCls: 'add',
        handler: this.displayUploadForm,
        scope:   this
      },
      '-',
      this.deleteButton,
      new Ext.Toolbar.Fill
    ]
  });
  
  this.bbar = new Ext.ux.MVC.DefaultPagingToolbar({
    store: this.dataView.store,
    model: config.model
  });
  
  Ext.applyIf(config, {
    region:     'center',
    style:      'overflow: auto',
    autoScroll: true,
    items:      [this.dataView],
    tbar:       this.tbar,
    bbar:       this.bbar
  });
  
  Ext.ux.App.ImageBrowser.view.DataViewPanel.superclass.constructor.call(this, config);
  
  this.searcher.store = this.dataView.store;
  
  this.dataView.on('selectionchange', this.setDeleteButtonStatus, this);
};

Ext.extend(Ext.ux.App.ImageBrowser.view.DataViewPanel, Ext.Panel, {
  
  /**
   * Sorts the DataView by the given field.  Intended to be attached to the sort combo box's
   * 'select' event
   */
  sort: function(combo, record, index) {
    var sortOrder = record.data.value;
    
    this.dataView.store.sort(sortOrder);
  },
  
  /**
   * Displays a form window to upload a new image.  Refreshes DataView store after successful upload
   */
  displayUploadForm: function() {
    this.controller.callAction('new', {
      listeners: {
        'save': {
          fn:    function() {console.log("test"); this.dataView.store.reload();},
          scope: this
        }
      }
    });
  },
  
  /**
   * Deletes the selected image and refreshes the DataView's store if successful
   */
  deleteSelected: function() {
    var record = this.dataView.getSelectedRecords()[0];
    if (record) {
      console.log('deleting image ' + record.data.id);
      
      //callbacks to be called after delete
      var destroyConfig = {
        success: function() {
          Ext.ux.MVC.Flash.flash('The Image has been successfully deleted', 'Image deleted');
          this.dataView.store.reload();
        },
        failure: function() {
          Ext.Msg.alert('Image NOT Deleted', 'Something went wrong while deleting this Image, it has NOT been deleted');
        },
        scope: this
      };
      
      Ext.MessageBox.confirm(
        'Delete Selected Image?',
        'Are you sure you want to delete this image?  This cannot be undone',
        function(btn) {
          if (btn == 'yes') {
            this.model.destroy(record.data.id, destroyConfig);
          }
        },
        this
      );
    }
  },
  
  /**
   * Enables or disables the delete button based on whether or not an image is selected
   */
  setDeleteButtonStatus: function() {
    if (this.dataView.getSelectionCount() > 0) {
      this.deleteButton.enable();
    } else {
      this.deleteButton.disable();
    };
  }
});


Ext.reg('image_browser_data_view_panel', Ext.ux.App.ImageBrowser.view.DataViewPanel);