/**
 * Ext.ux.App.CategoryManager.view.Index
 * @extends Ext.Window
 * Displays categories tree and edit/new form
 */
Ext.ux.App.CategoryManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {model: Ext.ux.App.CategoryManager.Category});
  this.model = config.model;
  
  this.tree = new Ext.ux.App.CategoryManager.view.Tree({model: config.model});
  this.form = new Ext.ux.App.CategoryManager.view.Form();
  
  Ext.applyIf(config, {
    iconCls: 'category',
    title:   'Category Manager',
    layout:  'border',
    items:   [this.tree, this.form],
    width:   800,
    height:  600
  });  
  
  Ext.ux.App.CategoryManager.view.Index.superclass.constructor.call(this, config);
  
  this.tree.getSelectionModel().on('beforeselect', this.selectionchanged, this);
  this.tree.on('beforeload', this.resetForm, this);
};

Ext.extend(Ext.ux.App.CategoryManager.view.Index, Ext.Window, {
  selectionchanged: function(selectionModel, node, oldNode) {
    //make sure the form is enabled...
    if (this.form.disabled) { this.form.enable(); }
    
    var id = node.id;
    
    this.loadForm(id);
    
    // //show a dialog before dumping unsaved changes
    // if (this.form.form.isDirty()) {
    //   Ext.MessageBox.confirm(
    //     'Discard changes?',
    //     'This Category has been modified - discard changes?',
    //     function(btn) {
    //       if (btn == 'yes') {
    //         this.loadForm(id);
    //       } else {
    //         //stop the tree from selecting the new node until we've finished editing
    //         // selectionModel.select(oldNode);
    //         return false;
    //       };
    //     },
    //     this
    //   );
    // } else {
    //   //no changes pending, just load the form
    //   this.loadForm(id);
    // }
  },
  
  /**
   * Loads the given category ID into the form
   */
  loadForm: function(id) {
    //if the node's id is just a number, load it to the form.
    //otherwise, we've got an unsaved Category and need to create a new record for it
    if (/ynode/.test(id)) {
      //this is a new node, so we don't need to load from a URL
      var recordObject = this.model.getRecord();
      var record = new recordObject({
        title: 'New Unsaved Category'
      });

      this.form.form.loadRecord(record);
      console.log("loading record");
    } else {
      //load the record
      this.form.loadForm(id);
      console.log("loading from url");
    };
  },
  
  /**
   * Reset and disable the form
   */
  resetForm: function() {
    this.form.disable();
    this.form.form.reset();
  }
});


Ext.reg('category_manager_index', Ext.ux.App.CategoryManager.view.Index);
