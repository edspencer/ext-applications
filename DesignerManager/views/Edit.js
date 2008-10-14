/**
 * Ext.ux.App.DesignerManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindow
 * Designer Manager edit Designer view
 */
Ext.ux.App.DesignerManager.view.Edit = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    model:     Ext.ux.App.DesignerManager.Designer,
    width:     882,
    minWidth:  882,
    height:    450,
    minHeight: 450,
    
    formConfig: {
      defaults: {xtype: null},
      layout:   'border',
      items:  [
        { 
          width:     230,
          minWidth:  230,
          region:    'west',
          split:     true,
          layout:    'fit',
          collapsible: true,
          // bodyStyle: 'padding: 0 10px 10px 10px;',
          bodyStyle:  'padding: 0 0 22px 6px;',
          items: [
            {
              xtype:      'image_associator',
              model:      Ext.ux.App.DesignerManager.Designer,
              imageModel: Ext.ux.App.ImageBrowser.Image,
              objectId:   config.object_id,
              title:      'Attach Image'
            }
          ]
        },
        {
          region: 'center',
          layout: 'form',
          items:  [
            {
              xtype:      'textfield',
              fieldLabel: 'Name', 
              name:       'designer[name]'
            },
            {
              xtype:      'htmleditor',
              fieldLabel: 'Description',
              name:       'designer[description]',
              anchor:     "-15 -50"
            }
          ]
        }
      ]
    }
  });
  
  Ext.ux.App.DesignerManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.DesignerManager.view.Edit, Ext.ux.App.view.DefaultEditWindow);
Ext.reg('designer-manager_edit', Ext.ux.App.DesignerManager.view.Edit);