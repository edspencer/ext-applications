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
      model: Ext.ux.App.UserManager.User,
      columns: [
        { header: 'Login',                          dataIndex: 'login',                             type: 'string'},
        { header: 'Email',                          dataIndex: 'email',                             type: 'string'},
        { header: 'Admin',                          dataIndex: 'admin',                             type: 'string'},
        { header: 'Activated',                      dataIndex: 'activated',                         type: 'string', hidden: true},
        { header: 'Posts count',                    dataIndex: 'posts_count',                       type: 'string', hidden: true},
        { header: 'Bio html',                       dataIndex: 'bio_html',                          type: 'string', hidden: true},
        { header: 'Display name',                   dataIndex: 'display_name',                      type: 'string'},
        { header: 'Website',                        dataIndex: 'website',                           type: 'string', hidden: true},
        { header: 'Bio',                            dataIndex: 'bio',                               type: 'string', hidden: true},
        { header: 'First name',                     dataIndex: 'first_name',                        type: 'string'},
        { header: 'Last name',                      dataIndex: 'last_name',                         type: 'string'},
        { header: 'Gender',                         dataIndex: 'gender',                            type: 'string'},
        { header: '# attempted purchases',          dataIndex: 'attempted_purchase_count',          type: 'string'},
        { header: '# attempted purchased products', dataIndex: 'attempted_purchase_products_count', type: 'string'},
        { header: 'Is banned',                      dataIndex: 'is_banned',                         type: 'string', hidden: true}
      ]
    }
  });
  
  Ext.ux.App.UserManager.view.Index.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.UserManager.view.Index, Ext.ux.App.view.DefaultGridWindow);
Ext.reg('user_manager_index', Ext.ux.App.UserManager.view.Index);