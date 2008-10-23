/**
 * Ext.ux.App.VoucherManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for Voucher Manager
 */
Ext.ux.App.VoucherManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    iconCls: 'voucher',
    title:   'Voucher Manager',
    
    gridConfig: {
      model:   Ext.ux.App.VoucherManager.Voucher,
      columns: Ext.ux.App.VoucherManager.view.GridColumns()
    }
  });
  
  Ext.ux.App.VoucherManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.VoucherManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('voucher-manager_index', Ext.ux.App.VoucherManager.view.Index);