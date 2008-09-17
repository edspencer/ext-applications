/**
 * Ext.ux.App.MessageManager.view.Index
 * @extends Ext.Window
 * Displays latest messages
 */
Ext.ux.App.MessageManager.view.Index = function(config) {
  var config = config || {};
  
  //stores the current scroll index of the grid view so that it is not reset after each refresh
  this.scrollIndex = 1000;
  
  var model = Ext.ux.App.MessageManager.Message;
  this.store = model.collectionStore({ remoteSort: false });
  
  var bbar = new Ext.ux.MVC.DefaultPagingToolbar({
    pageSize:    10,
    model:       model,
    store:       this.store,
    prevText:    "Newer messages",
    nextText:    "Older messages",
    refreshText: "Refresh (messages are automatically refreshed every 5 seconds)",
    firstText:   "Newest messages",
    lastText:    "Oldest messages"
  });
  
  this.grid = new Ext.grid.GridPanel({
    store:   this.store,
    region:  'center',
    sm:      new Ext.grid.RowSelectionModel({singleSelect: true}),
    bbar:    bbar,
    plugins: [bbar],
    
    columns: [
      {
        id:        'content',
        header:    'Message',
        sortable:  false,
        dataIndex: 'content',
        renderer:  function() {return '';}
      },
      {
        id:        'created_at',
        width:     40,
        header:    'Posted',
        sortable:  false,
        dataIndex: 'created_at',
        renderer: function(value, meta, record) {
          return Ext.ux.App.MessageManager.DateParser.shortDateTime(value);
        }
     }
    ],
    autoExpandColumn: 'content',
    disableSelection: true,
    viewConfig: {
      forceFit:      true,
      enableRowBody: true,
      getRowClass:   function(record, rowIndex, p, store) {
        p.body = '<p style="padding: 0 5px 5px 5px;">' + record.data.content + "</p>";
        return 'x-grid3-row-expanded';
      }
    }
  });
  
  this.form = new Ext.form.FormPanel({
    region:     'south',
    height:     150,
    split:      true,
    bodyStyle:  'padding: 5px;',
    labelAlign: 'top',
    url:        '/messages',
    
    items:  [
      {
        xtype:      'textarea',
        fieldLabel: 'Your Message',
        name:       'message[content]',
        id:         'message_manager_content',
        anchor:     "100% -20",
        minLength:  1
      }
    ]
  });
  
  Ext.applyIf(config, {
    iconCls: 'feedback',
    title:   'Recent Messages',
    layout:  'border',
    height:  600,
    width:   400,
    split:   true,
    
    items:   [
      this.grid,
      this.form
    ],
    
    buttons: [
      {
        text:    'Send',
        scope:   this,
        handler: function() {
          this.form.form.submit({
            method:  'post',
            scope:   this,
            success: function(form, action) {
              this.reloadStore();
              Ext.getCmp('message_manager_content').setValue('');
              Ext.getCmp('message_manager_content').focus();
              
              //hack to make the grid scroll to the bottom after posting a message 
              this.scrollIndex = 1000;
              this.grid.getView().scroller.dom.scrollTop = this.scrollIndex;
            }
          });
        }
      }
    ]
  });
  
  Ext.ux.App.MessageManager.view.Index.superclass.constructor.call(this, config);
  
  boo = this;
  
  this.store.on('load', function(store) { store.sort('created_at', 'ASC'); });
  
  //give the store sensible default values.
  this.store.lastOptions = this.store.lastOptions || {};
  this.store.lastOptions.params = {start: 0, limit: 10};
  
  //set up a periodic updater for the store:
  this.updateTask = Ext.TaskMgr.start({
    run:      this.reloadStore,
    scope:    this,
    interval: 5000
  });
  
  this.on('beforeclose', function() { Ext.TaskMgr.stop(this.updateTask);}, this);
  
  //store the current scroll location so that we can restore it after store refresh
  this.grid.on('bodyscroll', function(left, top){
    this.scrollIndex = top;
  }, this);
};

Ext.extend(Ext.ux.App.MessageManager.view.Index, Ext.Window, {
  reloadStore: function() {
    this.store.reload({
      //reset the grid's scroll position 
      callback: function() {
        this.grid.getView().scroller.dom.scrollTop = this.scrollIndex;
      },
      scope: this
    });
  }
});