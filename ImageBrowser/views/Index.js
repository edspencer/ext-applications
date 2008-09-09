/**
 * Ext.ux.App.ImageBrowser.view.Index
 * @extends Ext.ux.App.view.DefaultGridWindow
 * Description
 */
Ext.ux.App.ImageBrowser.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    id:      'image-browser-index',
    iconCls: 'image',
    title:   'Image Browser',
    
    hasHelpTool: true,
    
    gridConfig: {
      model:   Ext.ux.App.ImageBrowser.Image,
      columns: [
        { header: 'Content type', dataIndex: 'content_type',   type: 'string', hidden: true},
        { header: 'Preview',      dataIndex: 'thumb_filename', type: 'string', renderer: Ext.util.Format.renderThumbnail, sortable: false},
        { header: 'Filename',     dataIndex: 'filename',       type: 'string'},
        { header: 'Thumbnail',    dataIndex: 'thumbnail',      type: 'string', hidden: true},
        { header: 'Size',         dataIndex: 'size',           type: 'string', hidden: true},
        { header: 'Width',        dataIndex: 'width',          type: 'string', hidden: true},
        { header: 'Height',       dataIndex: 'height',         type: 'string', hidden: true},
        { header: 'Title',        dataIndex: 'title',          type: 'string', hidden: true},
        { header: 'Description',  dataIndex: 'description',    type: 'string', hidden: true},
        { header: 'Caption',      dataIndex: 'caption',        type: 'string', hidden: true}
      ]
    }
  });
  
  Ext.ux.App.ImageBrowser.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.ImageBrowser.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('xtype', Ext.ux.App.ImageBrowser.view.Index);
