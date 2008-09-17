/**
 * Ext.ux.App.PageManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Page Manager new Page form window
 */
Ext.ux.App.PageManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.PageManager.Page,
    formConfig: {
      items:    Ext.ux.App.PageManager.view.FormFields(),
      defaults: {xtype: null}
    }
  });
  
  Ext.ux.App.PageManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.PageManager.view.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('page-manager_new', Ext.ux.App.PageManager.view.New);