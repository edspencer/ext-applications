/**
 * Ext.ux.App.VoucherManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides Voucher model CRUD
 */
Ext.ux.App.VoucherManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.VoucherManager.Voucher;
  this.controller = new Ext.ux.App.VoucherManager.VoucherManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'voucher-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Voucher Management',
      iconCls: 'voucher',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.VoucherManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.VoucherManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.VoucherManager.view");