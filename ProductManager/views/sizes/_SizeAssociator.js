/**
 * Ext.ux.App.ProductManager.view.Size.SizeAssociator
 * @extends Ext.ux.App.ProductManager.view.HABTMTree
 * Allows a Product to be linked to any number of Sizes
 */
Ext.ux.App.ProductManager.view.Size.SizeAssociator = function(config) {
  var config = config || {};
  
  this.objectId    = config.objectId;
  this.sizeModel = Ext.ux.App.ProductManager.Size;
  
  this.addButton = new Ext.Button({
    text:    'Add a new Size',
    iconCls: 'add',
    scope:   this,
    handler: this.addHandler
  });
  
  this.removeButton = new Ext.Button({
    text:    'Delete selected Size',
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
    title:      "This Product's Sizes",
    height:     315,
    habtmModel: this.sizeModel,
    model:      Ext.ux.App.ProductManager.Product,
    tbar:       this.tbar
  });
  
  Ext.ux.App.ProductManager.view.Size.SizeAssociator.superclass.constructor.call(this, config);
  
  this.tree.getSelectionModel().on('selectionchange', this.updateDeleteButtonStatus, this);
};

Ext.extend(Ext.ux.App.ProductManager.view.Size.SizeAssociator, Ext.ux.App.view.HABTMTree, {
  
  defaultLoaderUrl: function() {
    if (this.objectId) {
      return this.sizeModel.treeUrl() + '?node=root&checked=true&associated_model=' + this.model.model_name + '&associated_id=' + this.objectId;
    } else {
      return this.sizeModel.treeUrl() + '?node=root&checked=true';
    };
  },
  
  /**
   * Displays a New Size dialog
   */
  addHandler: function() {
    var win = new Ext.ux.App.ProductManager.view.Size.New({
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
   * Deletes the selected Size
   */
  removeHandler: function() {
    var node = this.tree.getSelectionModel().getSelectedNode();
    
    Ext.Msg.confirm(
      'Are you sure?',
      'Are you sure you want to delete this Size?  This cannot be undone',
      function(button) {
        if (button == 'yes') {
          this.sizeModel.destroy(node.id, {
            scope:   this,
            success: function() {
              Ext.ux.MVC.NotificationManager.inform("The Size has been deleted");
              this.refreshTree();
            },
            failure: function() {
              Ext.Msg.alert(
                'Size NOT deleted',
                'Something went wrong when trying to delete this Size - it has NOT been deleted'
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

Ext.reg('size_associator', Ext.ux.App.ProductManager.view.Size.SizeAssociator);