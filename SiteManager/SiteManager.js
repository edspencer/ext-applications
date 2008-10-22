/**
 * Ext.ux.App.SiteManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides site settings update form
 */
Ext.ux.App.SiteManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.SiteManager.Site;
  this.controller = new Ext.ux.App.SiteManager.SiteManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'site-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Site Settings',
      iconCls: 'settings',
      handler: this.launchEdit,
      scope:   this
    };
  };
  
  Ext.ux.App.SiteManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.SiteManager, Ext.ux.App.Base);

Ext.override(Ext.ux.App.SiteManager, {
  
  /**
   * Override the default launcher as we want to show the Edit view instead of Index
   */
  launchEdit: function(launchConfig) {
    this.desktop = this.app.getOS();
    this.controller.callAction('edit');
  }
  
});

Ext.ns("Ext.ux.App.SiteManager.view");