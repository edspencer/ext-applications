/**
 * Ext.ux.App.DesktopSettings.view.Edit
 * @extends Ext.Window
 * Provides configuration of Desktop settings
 */
Ext.ux.App.DesktopSettings.view.Edit = function(config) {
  var config = config || {};
  
  this.form = new Ext.form.FormPanel({
    items: [
      {
        xtype:      'textfield',
        name:       'desktop_background',
        fieldLabel: 'Desktop Background'
      }
    ]
  });
  
  Ext.applyIf(config, {
    title:  'Desktop Preferences',
    width:  500,
    height: 700,
    layout: 'fit',
    items:  [this.form],
    
    stateful:   true,
    stateId:    'desktop_settings',
    applyState: function() {
      console.log("applying state");
    },
    getState:   function() {
      console.log("getting state");
    }
  });
  
  Ext.ux.App.DesktopSettings.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.DesktopSettings.view.Edit, Ext.Window);
Ext.reg('desktop_settings_window', Ext.ux.App.DesktopSettings.view.Edit);