/**
 * Ext.ux.App.VoucherManager.VoucherManagerController
 * @extends Ext.ux.App.CrudController
 * Voucher controller - basic CRUD
 */
Ext.ux.App.VoucherManager.VoucherManagerController = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    viewsPackage        : "Ext.ux.App.VoucherManager.view",
    viewWindowNamespace : 'voucher-manager'
  });
  
  Ext.ux.App.VoucherManager.VoucherManagerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.VoucherManager.VoucherManagerController, Ext.ux.App.CrudController);
