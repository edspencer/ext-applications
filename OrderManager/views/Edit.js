/**
 * Ext.ux.App.OrderManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Order Manager edit Order view
 */
Ext.ux.App.OrderManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.OrderManager.Order,
    formConfig: {
      items: Ext.ux.App.OrderManager.view.FormFields()
    }
  });
  
  Ext.ux.App.OrderManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.OrderManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('order-manager_edit', Ext.ux.App.OrderManager.view.Edit);