/**
 * Ext.ux.App.VoucherManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Voucher Manager edit Voucher view
 */
Ext.ux.App.VoucherManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:      Ext.ux.App.VoucherManager.Voucher,
    height:     200,
    minHeight:  200,
    maxHeight:  200,
    formConfig: {
      items: Ext.ux.App.VoucherManager.view.FormFields(),
      defaults: {xtype: null}
    },
    helpConfig: {
      html: '<h1>Vouchers</h1><p>Enter a voucher code, and either an amount or a percentage.</p><p>Voucher codes must be unique, and can only be used once.  They can be any combination of letters and numbers.</p>'
    }
  });
  
  Ext.ux.App.VoucherManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.VoucherManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('voucher-manager_edit', Ext.ux.App.VoucherManager.view.Edit);