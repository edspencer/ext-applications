/**
 * Ext.ux.App.ProductManager.view.CategoryAssociator
 * @extends Ext.ux.App.view.HABTMTree
 * Links any model to one or more categories in a tree
 */
Ext.ux.App.ProductManager.view.CategoryAssociator = function(config) {
  var config = config || {};
  
  this.objectId      = config.objectId;
  this.categoryModel = Ext.ux.App.CategoryManager.Category;
  
  Ext.applyIf(config, {
    title:      "This Product's Categories",
    height:     315,
    habtmModel: this.categoryModel,
    model:      Ext.ux.App.ProductManager.Product
  });
  
  Ext.ux.App.ProductManager.view.CategoryAssociator.superclass.constructor.call(this, config);
};

Ext.extend(Ext.ux.App.ProductManager.view.CategoryAssociator, Ext.ux.App.view.HABTMTree, {
  
  defaultLoaderUrl: function() {
    if (this.objectId) {
      return this.categoryModel.treeUrl() + '?checked=true&associated_model=' + this.model.model_name + '&associated_id=' + this.objectId;
    } else {
      return this.categoryModel.treeUrl() + '?checked=true';
    };
  }
  
});

Ext.reg('category_associator', Ext.ux.App.ProductManager.view.CategoryAssociator);