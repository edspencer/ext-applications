/**
 * Ext.ux.App.UserManager.User
 * @extends Ext.ux.App.model
 * User model
 */
Ext.ux.App.UserManager.User = function(config) {
  var config = config || {};
  
  this.model_name = 'user';
  
  Ext.applyIf(config, {
    fields: [
      {name: 'id', type: 'int'}
    ]
  });
  
  Ext.ux.App.UserManager.User.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.UserManager.User, Ext.ux.App.model);
Ext.reg('user_model', Ext.ux.App.UserManager.User);

// Ext.ux.App.UserManager.User = new Ext.ux.MVC.model.Base('user', {
//   fields: [
//     { name: 'id',                                type: 'int'},
//     { name: 'login',                             type: 'string'},
//     { name: 'email',                             type: 'string'},
//     { name: 'admin',                             type: 'string'},
//     { name: 'activated',                         type: 'string'},
//     { name: 'posts_count',                       type: 'string'},
//     { name: 'bio_html',                          type: 'string'},
//     { name: 'display_name',                      type: 'string'},
//     { name: 'forum_username',                    type: 'string'},
//     { name: 'website',                           type: 'string'},
//     { name: 'bio',                               type: 'string'},
//     { name: 'first_name',                        type: 'string'},
//     { name: 'last_name',                         type: 'string'},
//     { name: 'gender',                            type: 'string'},
//     { name: 'attempted_purchase_count',          type: 'string'},
//     { name: 'attempted_purchase_products_count', type: 'string'},
//     { name: 'is_banned',                         type: 'string'}
//   ]
// });