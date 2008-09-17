/**
 * Ext.ux.App.CategoryManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides Category model CRUD
 */
Ext.ux.App.CategoryManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.CategoryManager.Category;
  this.controller = new Ext.ux.App.CategoryManager.CategoryManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'category-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Category Management',
      iconCls: 'category',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.CategoryManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.CategoryManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.CategoryManager.view");