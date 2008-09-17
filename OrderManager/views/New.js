/**
 * Ext.ux.App.OrderManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Order Manager new Order form window
 */
Ext.ux.App.OrderManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.OrderManager.Order,
    formConfig: {
      items: Ext.ux.App.OrderManager.view.FormFields()
    }
  });
  
  Ext.ux.App.OrderManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.OrderManager.view.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('order-manager_new', Ext.ux.App.OrderManager.view.New);