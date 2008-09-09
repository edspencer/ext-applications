/**
 * Ext.ux.App.ContactFormManager
 * @extends Ext.ux.App.Scaffold
 * Contact Manager application (CRUD)
 */
Ext.ux.App.ContactFormManager = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:      Ext.ux.App.ContactFormManager.Contact,
    namespace: 'Ext.ux.App.ContactFormManager',
    
    text:      'Contact Form Submissions',
    iconCls:   'feedback',
    
    indexViewConfig: {
      topToolbarConfig: {
        hasAddButton: false
      }
    }
  });
  
  Ext.ux.App.ContactFormManager.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ContactFormManager, Ext.ux.App.Scaffold);
