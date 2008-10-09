/**
 * Ext.ux.App.ProductManager.view.Colour.ColourAssociator
 * @extends Ext.ux.App.ProductManager.view.HABTMTree
 * Allows a Product to be linked to any number of colours
 */
Ext.ux.App.ProductManager.view.Colour.ColourAssociator = function(config) {
  var config = config || {};
  
  this.objectId    = config.objectId;
  this.colourModel = Ext.ux.App.ProductManager.Colour;
  
  this.addButton = new Ext.Button({
    text:    'Add a new Colour',
    iconCls: 'add',
    scope:   this,
    handler: this.addHandler
  });
  
  this.removeButton = new Ext.Button({
    text:    'Delete selected colour',
    iconCls: 'cancel',
    scope:   this,
    handler: this.removeHandler,
    disabled: true
  });
  
  this.refreshButton = new Ext.Button({
    text:    'Refresh',
    scope:   this,
    handler: this.refreshTree,
    iconCls: 'refresh'
  });
  
  this.tbar = new Ext.Toolbar({ items: [this.addButton, '-', this.removeButton, '-', this.refreshButton] });
  
  Ext.applyIf(config, {
    title:      "This Product's Colours",
    height:     315,
    habtmModel: this.colourModel,
    model:      Ext.ux.App.ProductManager.Product,
    tbar:       this.tbar
  });
  
  Ext.ux.App.ProductManager.view.Colour.ColourAssociator.superclass.constructor.call(this, config);
  
  this.tree.getSelectionModel().on('selectionchange', this.updateDeleteButtonStatus, this);
};

Ext.extend(Ext.ux.App.ProductManager.view.Colour.ColourAssociator, Ext.ux.App.view.HABTMTree, {
  
  defaultLoaderUrl: function() {
    if (this.objectId) {
      return this.colourModel.treeUrl() + '?node=root&checked=true&associated_model=' + this.model.model_name + '&associated_id=' + this.objectId;
    } else {
      return this.colourModel.treeUrl() + '?node=root&checked=true';
    };
  },
  
  /**
   * Displays a New colour dialog
   */
  addHandler: function() {
    var win = new Ext.ux.App.ProductManager.view.Colour.New({
      listeners: {
        'save': {
          fn: function() {
            this.refreshTree();
          },
          scope: this
        }
      }
    });
    
    win.show();
  },
  
  /**
   * Deletes the selected colour
   */
  removeHandler: function() {
    var node = this.tree.getSelectionModel().getSelectedNode();
    
    Ext.Msg.confirm(
      'Are you sure?',
      'Are you sure you want to delete this colour?  This cannot be undone',
      function(button) {
        if (button == 'yes') {
          this.colourModel.destroy(node.id, {
            scope:   this,
            success: function() {
              Ext.ux.MVC.NotificationManager.inform('The colour has been deleted');
              this.refreshTree();
            },
            failure: function() {
              Ext.Msg.alert(
                'Colour NOT deleted',
                'Something went wrong when trying to delete this colour - it has NOT been deleted'
              );
            }
          });
        };
      },
      this
    );
  },
  
  /**
   * Refreshes the tree, maintaining currently selected nodes
   */
  refreshTree: function() {
    this.tree.getLoader().load(this.treeRoot);
  },
  
  /**
   * Enables or disables the delete button based on whether or not a node is selected
   * Intended to be attached to the selection model's selectionchange event
   */
  updateDeleteButtonStatus: function(selModel, node) {
    if (node) {
      this.removeButton.enable();
    } else {
      this.removeButton.disable();
    };
  }
  
});

Ext.reg('colour_associator', Ext.ux.App.ProductManager.view.Colour.ColourAssociator);