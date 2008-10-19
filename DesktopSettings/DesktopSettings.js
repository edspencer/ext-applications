/**
 * Ext.ux.App.DesktopSettings
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides User model CRUD
 */
Ext.ux.App.DesktopSettings = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.controller = new Ext.ux.App.DesktopSettings.DesktopSettingsController({
    app: this
  });
  
  this.id = 'user-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'User Management',
      iconCls: 'user',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.DesktopSettings.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.DesktopSettings, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.DesktopSettings.view");  