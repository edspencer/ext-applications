Ext.ux.App.ContactFormManager.Contact = new Ext.ux.MVC.model.Base('contact', {
  fields: [
    { name: 'id',          type: 'int'},
    { name: 'created_at',  type: 'string'},
    { name: 'updated_at',  type: 'string'},
    { name: 'name',        type: 'string'},
    { name: 'website',     type: 'string'},
    { name: 'phone',       type: 'string'},
    { name: 'email',       type: 'string'},
    { name: 'message',     type: 'string'},
    { name: 'is_resolved', type: 'string'},
    { name: 'site_id',     type: 'string'},
    { name: 'company',     type: 'string'}
  ],
  
  markResolved: function(id, config) {
    var config = config || {};
    this.updateResolution(id, true, config);
  },
  
  markUnresolved: function(id, config) {
    var config = config || {};
    this.updateResolution(id, false, config);    
  },
  
  updateResolution: function(id, resolved, config) {
    var resolutionVar = resolved ? '1' : '0';
    
    var config = config || {};
    Ext.applyIf(config, {
      url:    this.singleDataUrl(id),
      method: 'post',
      params: '_method=put&contact[is_resolved]=' + resolutionVar
    });
    
    Ext.Ajax.request(config);
  }
});