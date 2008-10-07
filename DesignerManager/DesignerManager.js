/**
 * Ext.ux.App.DesignerManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides Designer model CRUD
 */
Ext.ux.App.DesignerManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.DesignerManager.Designer;
  this.controller = new Ext.ux.App.DesignerManager.DesignerManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'designer-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Designer Management',
      iconCls: 'designer',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.DesignerManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.DesignerManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.DesignerManager.view");