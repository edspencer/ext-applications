/**
 * Ext.ux.App.SiteManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Site Manager edit site view
 */
Ext.ux.App.SiteManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:      Ext.ux.App.SiteManager.Site,
    iconCls:    'settings',
    formConfig: {
      items:      Ext.ux.App.SiteManager.view.FormFields(),
      labelAlign: 'top',
      defaults:   {xtype: null}
    }
  });
  
  Ext.ux.App.SiteManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.SiteManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('site_manager_edit', Ext.ux.App.SiteManager.view.Edit);