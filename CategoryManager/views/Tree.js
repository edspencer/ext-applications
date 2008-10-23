/**
 * Ext.ux.App.CategoryManager.view.Tree
 * @extends Ext.tree.TreePanel
 * Displays categories
 */
Ext.ux.App.CategoryManager.view.Tree = function(config) {
  var config = config || {};
  Ext.applyIf(config, {model: Ext.ux.App.CategoryManager.Category});
  this.model = config.model;
  
  this.addButton = new Ext.Button({
    text:    'Add a Category',
    iconCls: 'add',
    handler: this.addCategory,
    scope:   this
  });
  
  this.deleteButton = new Ext.Button({
    text:     'Delete selected Category',
    iconCls:  'delete',
    handler:  this.deleteCategory,
    scope:    this,
    disabled: true
  });
  
  this.tbar = new Ext.Toolbar({
    items: [this.addButton, '-', this.deleteButton],
    width: 'auto'
  });
  
  Ext.applyIf(config, {
    region:          'west',
    split:           true,
    collapsible:     true,
    width:           280,
    autoScroll:      true,
    animate:         true,
    containerScroll: true,
    enableDD:        true,
    rootVisible:     false,
    tbar:            this.tbar,
    
    loader: new Ext.tree.TreeLoader({
      requestMethod: 'GET',
      dataUrl:       config.model.treeUrl()
    })
  });
  
  Ext.ux.App.CategoryManager.view.Tree.superclass.constructor.call(this, config);
  
  this.rootNode = new Ext.tree.AsyncTreeNode({
    text:      'Root',
    draggable: false,
    id:        'source'
  });
  
  this.setRootNode(this.rootNode);
  
  //enable the delete button as soon as a node has been selected for the first time
  this.getSelectionModel().on('selectionchange', function(selModel, node) {
    if (node) { this.deleteButton.enable(); }
  }, this);
  
  this.on('movenode', this.model.moveTreeNode, this.model);
};

Ext.extend(Ext.ux.App.CategoryManager.view.Tree, Ext.tree.TreePanel, {
  addCategory: function() {
    
    //create the node
    var node = new Ext.tree.TreeNode({
      text:      'Unsaved New Category',
      allowDrag: false,
      iconCls:   'category_unsaved',
      qtip:      'This Category has not yet been saved - complete the form and click the Save button to create the Category'
    });
    
    //figure out where to append it
    var selectedNode = this.getSelectionModel().getSelectedNode();
    if (selectedNode) {
      selectedNode.appendChild(node);
    } else {
      this.root.appendChild(node);
    };
    
    //force the node to be selected, and load the form
    this.getSelectionModel().select(node);
    
    // console.log("appended node");
  },
  
  deleteCategory: function() {
    var node = this.getSelectionModel().getSelectedNode();
    
    //callbacks to be called after delete
    var destroyConfig = {
      success: function() {
        Ext.ux.MVC.NotificationManager.inform('The Category has been successfully deleted');
        this.updateTree();
      },
      failure: function() {
        Ext.Msg.alert('Category NOT Deleted', 'Something went wrong while deleting this Category, it has NOT been deleted');
      },
      scope: this
    };
    
    Ext.MessageBox.confirm(
      'Delete Selected Category?',
      'Are you sure you want to delete this category?  This cannot be undone',
      function(btn) {
        if (btn == 'yes') {
          this.model.destroy(node.id, destroyConfig);
        }
      },
      this
    );
  },
  
  /**
   * Refreshes the tree and disables the delete button
   */
  updateTree: function() {
    this.rootNode.reload();
    this.deleteButton.disable();
  },
  
  /**
   * Fires an Ajax request to tell the server to update its representation of the Category tree
   */
  nodemoved: function(tree, node, oldParent, newParent, index) {
    
    var human_name = this.model.human_singular_name;
    
    Ext.Ajax.request({
      method:  'post',
      url:     this.model.treeReorderUrl({data: {id: node.id}}),
      params:  "parent=" + newParent.id + "&index=" + index,
      
      success: function() {
        Ext.ux.MVC.NotificationManager.inform('The ' + human_name + ' was moved successfully');
      },
      
      failure: function() {
        Ext.Msg.alert('Error moving ' + human_name, 'Something went wrong while moving this ' + human_name + ', please try again');
      }
    });
  }
});