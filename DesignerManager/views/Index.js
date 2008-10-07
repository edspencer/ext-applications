/**
 * Ext.ux.App.DesignerManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for Designer Manager
 */
Ext.ux.App.DesignerManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    iconCls: 'designer',
    title:   'Designer Manager',
    
    gridConfig: {
      model:   Ext.ux.App.DesignerManager.Designer,
      columns: Ext.ux.App.DesignerManager.view.GridColumns()
    }
  });
  
  Ext.ux.App.DesignerManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.DesignerManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('designer-manager_index', Ext.ux.App.DesignerManager.view.Index);