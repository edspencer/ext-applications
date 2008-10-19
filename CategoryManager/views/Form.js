/**
 * Ext.ux.App.CategoryManager.view.Form
 * @extends Ext.form.FormPanel
 * Dynamic form used for creating and updating categories
 */
Ext.ux.App.CategoryManager.view.Form = function(config) {
  var config = config || {};
  Ext.applyIf(config, {model: Ext.ux.App.CategoryManager.Category});
  this.model = config.model;
  
  this.addEvents({
    'formloaded':     true,
    'formloadfailed': true
  });
  
  this.saveButton = new Ext.Button({
    text:     'Save Changes',
    disabled: true,
    handler:  this.saveChanges,
    scope:    this,
    iconCls:  'save'
  });
  
  this.resetButton = new Ext.Button({
    text:     'Discard Changes',
    disabled: true,
    handler:  this.discardChanges,
    scope:    this,
    iconCls:  'cancel'
  });
  
  Ext.applyIf(config, {
    disabled: true,
    region:   'center',
    items: [
      {
        xtype:      'textfield',
        fieldLabel: 'Title',
        name:       'category[title]',
        anchor:     '98%',
        value:      'Select or Add a Category'
      },
      {
        xtype:      'textarea',
        fieldLabel: 'Description',
        name:       'category[description]',
        anchor:     '98% -50'
      }
    ],
    buttons: [this.saveButton],
    trackResetOnLoad: true
  });
  
  Ext.ux.App.CategoryManager.view.Form.superclass.constructor.call(this, config);
  
  this.on('enable', function() {
    this.saveButton.enable();
    this.resetButton.enable();
  }, this);
  
  this.on('disable', function() {
    this.saveButton.disable();
    this.resetButton.disable();
  }, this);
};

Ext.extend(Ext.ux.App.CategoryManager.view.Form, Ext.form.FormPanel, {
  saveChanges: function() {
    // console.log("saving changes");
  },
  
  /**
   * Resets the form and disables the Save button
   */
  discardChanges: function() {
    this.saveButton.disable();
    this.form.reset();
  },
  
  loadForm: function(id) {
    this.form.load({
      url:    this.model.singleDataUrl(id),
      method: 'get',
      scope:  this,
      success: function() {
        this.fireEvent('formloaded');
      },
      failure: function() {
        this.fireEvent('formloadfailed');
      }
    });
  }
});

Ext.reg('category_manager_form', Ext.ux.App.CategoryManager.view.Form);