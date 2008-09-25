/**
 * Ext.ux.App.ContactFormManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Contact Manager new Contact form window
 */
Ext.ux.App.ContactFormManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.ContactFormManager.Contact,
    formConfig: {
      items: Ext.ux.App.ContactFormManager.view.FormFields()
    }
  });
  
  Ext.ux.App.ContactFormManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ContactFormManager.view.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('contact-manager_new', Ext.ux.App.ContactFormManager.view.New);