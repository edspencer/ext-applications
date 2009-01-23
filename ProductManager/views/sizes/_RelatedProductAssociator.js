/**
 * Ext.ux.App.ProductManager.view.RelatedProductAssociator
 * @extends Ext.ux.App.view.HABTMTree
 * Links any model to one or more categories in a tree
 */
Ext.ux.App.ProductManager.view.RelatedProductAssociator = function(config) {
  var config = config || {};
  
  this.objectId            = config.objectId;
  this.relatedProductModel = Ext.ux.App.ProductManager.Product;
  
  this.relatedProductModel.foreign_key_name = 'related_product_id';
  
  Ext.applyIf(config, {
    title:      "Related Products",
    height:     315,
    habtmModel: this.relatedProductModel,
    model:      Ext.ux.App.ProductManager.Product
  });
  
  Ext.ux.App.ProductManager.view.RelatedProductAssociator.superclass.constructor.call(this, config);
};

Ext.extend(Ext.ux.App.ProductManager.view.RelatedProductAssociator, Ext.ux.App.view.HABTMTree, {
  
  defaultLoaderUrl: function() {
    if (this.objectId) {
      return this.relatedProductModel.treeUrl() + '?checked=true&associated_model=' + this.model.model_name + '&associated_id=' + this.objectId;
    } else {
      return this.relatedProductModel.treeUrl() + '?checked=true';
    };
  }
  
});

Ext.reg('related_product_associator', Ext.ux.App.ProductManager.view.RelatedProductAssociator);