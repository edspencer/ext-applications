/**
 * Ext.ux.App.ContactFormManager.view.Edit
 * @extends Ext.Window
 * Contact Manager information and edit view
 */
Ext.ux.App.ContactFormManager.view.Edit = function(config) {
  var config = config || {};
  Ext.applyIf(config, {model: Ext.ux.App.ContactFormManager.Contact});
  
  //keep "this." references to the current model and the database's unique ID for that object
  this.model     = config.model;
  this.object_id = config.object_id;
  
  this.info = new Ext.Panel();
  
  this.resolveButton = new Ext.Button({
    text:     'Mark as resolved',
    iconCls:  'save',
    disabled: true,
    scope:    this,
    handler:  this.markResolved
  });
  
  this.unresolveButton = new Ext.Button({
    text:     'Mark as not resolved',
    iconCls:  'cancel',
    disabled: true,
    hidden:   true,
    scope:    this,
    handler:  this.markUnresolved
  });
  
  this.infoPanel = new Ext.Panel({
    region:      'west',
    split:       true,
    width:       180,
    maxWidth:    180,
    items:       [this.info],
    buttons:     [this.resolveButton, this.unresolveButton],
    buttonAlign: 'center'
  });
  
  this.template = new Ext.Template(
    '<div class="contact-information">',
      '<dl class="contact-attributes">',
        '<dt>Received:</dt>',
        '<dd>{created_at}</dd>',
        '<dt>Last Updated:</dt>',
        '<dd>{updated_at}</dd>',
        '<dt>Resolved?:</dt>',
        '<dd>{is_resolved}</dd>',
      '</dl>',
    '</div>'
  );
  this.template.compile();
  
  this.saveButton = new Ext.Button({
    text:    'Save Changes',
    iconCls: 'save',
    scope:   this,
    handler: this.saveAction
  });
  
  this.cancelButton = new Ext.Button({
    text:    'Cancel',
    iconCls: 'cancel',
    scope:   this,
    handler: this.cancelAction
  });
  
  this.form = new Ext.form.FormPanel({
    items:   Ext.ux.App.ContactFormManager.view.FormFields().concat([{
      xtype: 'hidden',
      name:  '_method',
      value: 'put'
    }]),
    buttons: [this.saveButton, this.cancelButton],
    region:  'center',
    trackResetOnLoad: true,
    autoScroll:       true
  });
  
  Ext.applyIf(config, {
    layout:  'border',
    title:   'Contact form submission',
    iconCls: 'feedback',
    items:   [this.infoPanel, this.form],
    
    height: 300,
    width:  400
  });
  
  Ext.ux.App.ContactFormManager.view.Edit.superclass.constructor.call(this, config);
  
  this.addEvents({'save': true});
  
  this.loadForm(config.object_id);
};

Ext.extend(Ext.ux.App.ContactFormManager.view.Edit, Ext.Window, {
  
  /**
   * Triggers the form to load based on the given id
   * @param {Int} id The unique ID of the Contact to load into the form
   */
  loadForm: function(id) {
    this.form.load({
      url:    this.model.singleDataUrl(id),
      method: 'get',
      scope:  this,
      success: function(form, action) {
        this.updateInfo(action.result);
      },
      failure: function() {
        Ext.Msg.alert('Contact form submission could not be loaded - please try again');
      }
    });
  },
  
  /**
   * Updates the information held in this.info
   */
  updateInfo: function(response) {
    //regex to parse the fieldname (e.g. "asset[filename]" becomes "filename")
    var regex = new RegExp("contact\\[([a-zA-Z0-9\_]*)\\]");
    
    //build a record from the response
    var recordObj = this.model.getRecord();
    var attrs = {};
    for (key in response.data) {
      var newKey = regex.exec(key)[1];
      attrs[newKey] = response.data[key];
    }
    
    var record = new recordObj(attrs);
    
    this.template.overwrite(this.info.getEl(), record.data);
    this.setResolvedButtonState(record.data.is_resolved);
  },
  
  /**
   * Shows and enables the relevant Resolve or Unresolve button
   * @param {Boolean} resolved True to show Unresolve button, false to show Resolve button
   */
  setResolvedButtonState: function(resolved) {
    this.resolveButton.disable();   this.resolveButton.hide();
    this.unresolveButton.disable(); this.unresolveButton.hide();
    
    if (resolved) {
      this.unresolveButton.enable();
      this.unresolveButton.show();
    } else {
      this.resolveButton.enable();
      this.resolveButton.show();
    };
  },
  
  /**
   * Calls Contact's markResolved method
   */
  markResolved: function() {
    this.resolveButton.disable();
    
    this.model.markResolved(this.object_id, {
      success: function() { this.setResolvedButtonState(true);},
      scope: this
    });
  },
  
  /**
   * Calls Contact's markUnresolved method
   */
  markUnresolved: function() {
    this.unresolveButton.disable();
    
    this.model.markUnresolved(this.object_id, {
      success: function() { this.setResolvedButtonState(false);},
      scope: this
    });
  },
    
  /**
   * Saves the form
   */
  saveAction: function() {
    this.form.form.submit({
      method: 'post',
      url:    this.model.singleDataUrl(this.object_id),
      scope:  this,
      success: function() {
        Ext.ux.MVC.Flash.flash('The contact was successfully updated');
        if (this.fireEvent('save')) {
          this.close();
        };
      },
      failure: function() {
        Ext.Msg.alert('Contact save not successful', 'Something went wrong while trying to save this contact form submission - please try again');
      }
    });
  },
  
  /**
   * Closes the window after checking for unsaved changes to the contact
   */
  cancelAction: function() {
    if (this.form.form.isDirty()) {
      Ext.Msg.confirm(
        'Discard changes?',
        'You have unsaved changes to this contact form submission - discard them now?',
        function(btn) {
          if (btn == 'yes') {
            this.close();
          };
        },
        this
      );
    } else {
      this.close();
    };
  }
});


Ext.reg('contact_manager_edit', Ext.ux.App.ContactFormManager.view.Edit);
