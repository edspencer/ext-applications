/**
 * Ext.ux.App.OrderManager.view.Edit
 * @extends Ext.Window
 * Displays order details
 */
Ext.ux.App.OrderManager.view.Edit = function(config) {
  var config = config || {};
  Ext.applyIf(config, {model: Ext.ux.App.OrderManager.Order});
  
  this.objectId = config.object_id;
  this.model    = config.model;
  
  this.info = new Ext.Panel();
  
  this.infoPanel = new Ext.Panel({
    region:      'west',
    split:       true,
    collapsible: true,
    width:       180,
    minWidth:    180,
    items:       [this.info]
  });
  
  this.template = new Ext.Template(
    '<div class="order-information">',
      '<dl class="order-attributes">',
        '<dt>Order Date:</dt>',
        '<dd>{created_at}</dd>',
        '<dt>Status:</dt>',
        '<dd>{status}</dd>',
      '</dl>',
    '</div>'
  );
  this.template.compile();
  
  this.saveButton = new Ext.Button({
    text:    'Save',
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
  
  this.orderItems = new Ext.ux.App.OrderManager.view.OrderItems({objectId: this.objectId});
  
  this.form = new Ext.form.FormPanel({
    region:           'center',
    defaults:         {
      xtype: null,
      anchor: "-20"
    },
    cls:              'x-panel-mc',
    items:            Ext.ux.App.OrderManager.view.FormFields().concat(this.orderItems).concat({
      xtype: 'hidden',
      name:  '_method',
      value: 'put'
    }),
    buttons:          [this.saveButton, this.cancelButton],
    autoScroll:       true,
    trackResetOnLoad: true
  });
  
  Ext.applyIf(config, {
    title:   'Order Details',
    iconCls: 'order',
    layout:  'border',
    items:   [this.infoPanel, this.form],
    width:   800,
    height:  600
  });
  
  Ext.ux.App.OrderManager.view.Edit.superclass.constructor.call(this, config);
  
  this.addEvents({'save': true});
  this.loadForm(this.objectId);
};
Ext.extend(Ext.ux.App.OrderManager.view.Edit, Ext.Window, {
  
  /**
   * Triggers the form to load based on the given id
   * @param {Int} id The unique ID of the ORder to load into the form
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
        Ext.Msg.alert('The order could not be loaded - please try again');
      }
    });
  },
  
  /**
   * Updates the information held in this.info
   */
  updateInfo: function(response) {
    //regex to parse the fieldname (e.g. "asset[filename]" becomes "filename")
    var regex = new RegExp("order\\[([a-zA-Z0-9\_]*)\\]");
    
    //build a record from the response
    var recordObj = this.model.getRecord();
    var attrs = {};
    for (key in response.data) {
      var newKey = regex.exec(key)[1];
      attrs[newKey] = response.data[key];
    }
    
    var record = new recordObj(attrs);
    
    this.template.overwrite(this.info.getEl(), record.data);
    // this.setResolvedButtonState(record.data.is_resolved);
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
        Ext.ux.MVC.Flash.flash('The order was successfully updated');
        if (this.fireEvent('save')) {
          this.close();
        };
      },
      failure: function() {
        Ext.Msg.alert('Order save not successful', 'Something went wrong while trying to save this order form submission - please try again');
      }
    });
  },
  
  /**
   * Closes the window after checking for unsaved changes to the order
   */
  cancelAction: function() {
    if (this.form.form.isDirty()) {
      Ext.Msg.confirm(
        'Discard changes?',
        'You have unsaved changes to this order - discard them now?',
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


Ext.reg('order_manager_edit', Ext.ux.App.OrderManager.view.Edit);
