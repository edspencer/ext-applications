/**
 * Ext.ux.App.DesignerManager.view.New
 * @extends Ext.ux.App.view.DefaultNewWindow
 * Designer Manager new Designer form window
 */
Ext.ux.App.DesignerManager.view.New = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model: Ext.ux.App.DesignerManager.Designer,
    width:     650,
    minWidth:  650,
    height:    450,
    minHeight: 450,
    
    formConfig: {
      items: Ext.ux.App.DesignerManager.view.FormFields()
    }
  });
  
  Ext.ux.App.DesignerManager.view.New.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.DesignerManager.view.New, Ext.ux.App.view.DefaultNewWindow);
Ext.reg('designer-manager_new', Ext.ux.App.DesignerManager.view.New);