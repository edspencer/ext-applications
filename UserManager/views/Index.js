/**
 * Ext.ux.App.UserManager.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Index action view for User Manager
 */
Ext.ux.App.UserManager.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    id:      'user-manager-index',
    iconCls: 'user',
    title:   'User Manager',
    
    hasHelpTool: true,
    
    gridConfig: {
      model:   Ext.ux.App.UserManager.User,
      columns: Ext.ux.App.UserManager.view.GridColumns(),
      enableDragDrop: true
    }
  });
  
  Ext.ux.App.UserManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.UserManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('user_manager_index', Ext.ux.App.UserManager.view.Index);