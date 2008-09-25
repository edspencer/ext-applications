/**
 * Ext.ux.App.ContactManager
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Provides Contact model CRUD
 */
Ext.ux.App.ContactManager = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.model      = Ext.ux.App.ContactManager.Contact;
  this.controller = new Ext.ux.App.ContactManager.ContactManagerController({
    model: this.model,
    app:   this
  });
  
  this.id = 'contact-manager-win';
  
  this.init = function() {
    this.launcher = {
      text:    'Contact Management',
      iconCls: 'contact',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.ContactManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ContactManager, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.ContactManager.view");