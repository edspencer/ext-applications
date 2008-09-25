/**
 * Ext.ux.App.ContactFormManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for Contact Manager
 */
Ext.ux.App.ContactFormManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    iconCls: 'feedback',
    title:   'Contact Manager',
    
    topToolbarConfig: {
      hasAddButton: false
    },
    
    gridConfig: {
      model:   Ext.ux.App.ContactFormManager.Contact,
      columns: Ext.ux.App.ContactFormManager.view.GridColumns()
    }
  });
  
  Ext.ux.App.ContactFormManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ContactFormManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('contact-manager_index', Ext.ux.App.ContactFormManager.view.Index);