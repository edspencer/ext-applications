/**
 * Ext.ux.App.ImageBrowser.view.DataViewPanel
 * @extends Ext.Panel
 * Displays the images DataView with searching and sorting
 */
Ext.ux.App.ImageBrowser.view.DataViewPanel = function(config) {
  var config = config || {};
  Ext.applyIf(config, {model: Ext.ux.App.ImageBrowser.Image});
  
  this.dataView = new Ext.ux.App.ImageBrowser.view.DataView();
  
  this.searcher = new Ext.form.TextField({width: 120});

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
    typeAhead:     true
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
    region: 'center',
    layout: 'fit',
    style:  'overflow: auto',
    items:  [this.dataView],
    tbar:   this.tbar,
    bbar:   this.bbar
  });
  
  Ext.ux.App.ImageBrowser.view.DataViewPanel.superclass.constructor.call(this, config);
  
  this.dataView.on('selectionchange', this.setDeleteButtonStatus, this);
};

Ext.extend(Ext.ux.App.ImageBrowser.view.DataViewPanel, Ext.Panel, {
  /**
   * Displays a form window to upload a new image.  Refreshes DataView store after successful upload
   */
  displayUploadForm: function() {
    this.controller.callAction('new', {
      listeners: {
        'save': {
          fn:    function() {this.dataView.store.reload();},
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