/**
 * Ext.ux.App.ImageBrowser.view.Edit
 * @extends Ext.Window
 * Displays image preview and edit functionality
 */
Ext.ux.App.ImageBrowser.view.Edit = function(config) {
  var config = config || {};
  Ext.applyIf(config, {model: Ext.ux.App.ImageBrowser.Image});
  this.model = config.model;
  
  //keep a reference to this Image's ID
  this.object_id = config.object_id;
  
  this.info = new Ext.Panel();
  
  this.previewPanel = new Ext.Panel({
    region:     'west',
    split:      true,
    width:      165,
    autoScroll: true,
    layout:     'fit',
    items:      [this.info]
  });
  
  this.saveButton = new Ext.Button({
    text:    'Save',
    iconCls: 'save',
    handler: this.saveAction,
    scope:   this
  });
  
  this.cancelButton = new Ext.Button({
    text:    'Cancel',
    iconCls: 'cancel',
    scope:   this,
    handler: this.cancelAction
  });
  
  this.form = new Ext.form.FormPanel({
    region: 'center',
    items:   [
      {
        xtype: 'hidden',
        name:  '_method',
        value: 'put'
      }
    ].concat(Ext.ux.App.ImageBrowser.view.FormFields()),
    
    buttons:  [this.saveButton, this.cancelButton],
    loadMask: true,
    trackResetOnLoad: true
  });
  
  this.template = new Ext.Template(
    '<div class="image-information">',
      '<div class="image-preview">',
        '<img src="{thumb_filename}" title="{title}" />',
      '</div>',
      '<dl class="image-attributes">',
        '<dt>Filename:</dt>',
        '<dd>{filename}</dd>',
        '<dt>File Size:</dt>',
        '<dd>{size} bytes</dd>',
        '<dt>Image Size:</dt>',
        '<dd>{width}px x {height}px</dd>',
      '</dl>',
    '</div>'
  );
  this.template.compile();
  
  Ext.applyIf(config, {
    title:   'Edit Image',
    iconCls: 'image',
    layout:  'border',
    width:   570,
    height:  320,
    items:   [this.previewPanel, this.form]
  });
  
  Ext.ux.App.ImageBrowser.view.Edit.superclass.constructor.call(this, config);
  
  this.addEvents({'save': true});
  
  this.loadForm(config.object_id);
};
Ext.extend(Ext.ux.App.ImageBrowser.view.Edit, Ext.Window, {
  loadForm: function(id) {
    this.form.load({
      url:    this.model.singleDataUrl(id),
      method: 'get',
      scope:  this,
      success: function(form, action) {
        this.updatePreview(action.result);
      },
      failure: function() {
        Ext.Msg.alert('Image could not be loaded - please try again');
      }
    });
  },
  
  /**
   * Updates the preview panel using the data in the form load response
   */
  updatePreview: function(response) {    
    //regex to parse the fieldname (e.g. "asset[filename]" becomes "filename")
    var regex = new RegExp("image\\[([a-zA-Z0-9\_]*)\\]");
    
    //build a record from the response
    var recordObj = this.model.getRecord();
    var attrs = {};
    for (key in response.data) {
      var newKey = regex.exec(key)[1];
      attrs[newKey] = response.data[key];
    }
    
    var record = new recordObj(attrs);
    
    this.template.overwrite(this.info.getEl(), record.data);
  },
  
  saveAction: function() {
    this.form.form.submit({
      method: 'post',
      url:    this.model.singleDataUrl(this.object_id),
      scope:  this,
      success: function() {
        Ext.ux.MVC.NotificationManager.inform('The image was successfully updated');
        if (this.fireEvent('save')) {
          this.close();
        };
      },
      failure: function() {
        Ext.Msg.alert('Image save not successful', 'Something went wrong while trying to save this image - please try again');
      }
    });
  },
  
  cancelAction: function() {
    if (this.form.form.isDirty()) {
      var confirm = Ext.MessageBox.confirm(
        'Discard changes?',
        'You have unsaved changes on this image - discard them now?',
        function(btn) { if (btn == 'yes') { this.close(); } },
        this
      );
    } else {
      this.close();
    }
  }
});
