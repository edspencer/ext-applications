/**
 * Ext.ux.App.VoucherManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Voucher Manager new Voucher form window
 */
Ext.ux.App.VoucherManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:      Ext.ux.App.VoucherManager.Voucher,
    height:     230,
    minHeight:  230,
    maxHeight:  230,
    minWidth:   640,
    formConfig: {
      items: Ext.ux.App.VoucherManager.view.FormFields(),
      defaults: {xtype: null}
    },
    helpConfig: {
      html: '<h1>Vouchers</h1><p>Enter a voucher code, and either an amount or a percentage.</p><p>Voucher codes must be unique, and can only be used once.  They can be any combination of letters and numbers.</p><p>Tick single use to only allow the voucher to be used once.</p>'
    }
  });
  
  Ext.ux.App.VoucherManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.VoucherManager.view.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('voucher-manager_new', Ext.ux.App.VoucherManager.view.New);