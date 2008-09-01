/**
 * Ext.ux.App.UserManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides User model CRUD
 */
Ext.ux.App.UserManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.UserManager.User;
  this.controller = new Ext.ux.App.UserManager.UserManagerController({
    model: this.model,
    app:   this
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
  
  Ext.ux.App.UserManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.UserManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.UserManager.view");