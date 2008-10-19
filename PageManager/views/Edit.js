/**
 * Ext.ux.App.PageManager.view.Edit
 * @extends Ext.ux.App.view.DefaultEditWindowWithTinyMce
 * Page Manager edit Page view
 */
Ext.ux.App.PageManager.view.Edit = function(config) {
  var config = config || {};
  
  this.previewButton = new Ext.Button({
    text:    'Preview',
    iconCls: 'page',
    scope:   this,
    handler: this.preview
  });
  
  Ext.applyIf(config, {
    model:  Ext.ux.App.PageManager.Page,
    width:  850,
    height: 620,
    
    formConfig: {
      items: Ext.ux.App.PageManager.view.FormFields(),
      defaults: {xtype: null},
      buttons: [this.previewButton]
    }
  });
  
  Ext.ux.App.PageManager.view.Edit.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.PageManager.view.Edit, Ext.ux.App.view.DefaultEditWindowWithTinyMce, {
  /**
   * Opens a preview iframe with current contents of the page edit form
   */
  preview: function() {
    tinyMCE.triggerSave();
    
    var form = this.form.form;
    var dataFields = ['page[title]', 'page[content]'];
        
    var data = {};
    
    for (var i = dataFields.length - 1; i >= 0; i--){
      data[dataFields[i]] = form.findField(dataFields[i]).value;
    };
    
    if (this.previewWindow === undefined || this.previewWindow === null) {
      this.previewWindow = window.open('', '_previewWindow');
    };
    
    Ext.Ajax.request({
      url: '/admin/pages/preview',
      method: 'post',
      scope:  this,
      params: data,
      success: function(response, options) {
        this.previewWindow.document.write(response.responseText);
      }
    });
  }
});

Ext.reg('page-manager_edit', Ext.ux.App.PageManager.view.Edit);