/**
 * Ext.ux.App.ProductManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Product Manager edit Product view
 */
Ext.ux.App.ProductManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:       Ext.ux.App.ProductManager.Product,
    width:       800,
    height:      600,
    collapsible: false,
    tools: [
      {
        id:   'help',
        scope: this,
        handler: function() {
          this.controller.callAction('edit_help');
        }
      }
    ],
    
    formConfig: {
      defaults:  {xtype: null},
      bodyStyle: 'padding: 5px',
      cls:       'x-panel-mc',
      items:     Ext.ux.App.ProductManager.view.FormFields(config.object_id).concat(Ext.ux.App.ProductManager.view.EditFormFields(config.object_id))
    }
  });
  
  Ext.ux.App.ProductManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ProductManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('product-manager_edit', Ext.ux.App.ProductManager.view.Edit);