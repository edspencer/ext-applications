/**
 * Ext.ux.App.SpecRunner.view.Index
 * @extends Ext.Window
 * Window containing an iframe which displays JSSpec output
 */
Ext.ux.App.SpecRunner.view.Index = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    title:   'JSSpec Runner',
    width:   640,
    height:  480,
    iconCls: 'tick',
    html:  [{
      tag: 'iframe', id: 'specrunner-iframe', frameborder: '0', border: '0'
    }],
    
    tools: [
      {
        id: 'help',
        scope: this,
        handler: function() {
          this.controller.callAction('help');
        }
      },
      {
        id: 'refresh',
        scope: this,
        handler: function() {
          this.iframe.setSrc(); //equivalent to a refresh
          this.initIFrame();
        }
      }
    ],
    
    filesBaseDirectory: '/javascripts',
    
    JSSpecFiles: {
      'jsspec': ['diff_match_patch', 'JSSpec']
    },
    
    requiredFiles: {
      'ext':  ['adapter/ext/ext-base', 'ext-all'],
      'ext-mvc': 
        {
          '': ['base'],
          'lib'        : ['application', 'router', 'route', 'flash', 'string_methods', 'request_exception_handler'],
          'model'      : ['base'],
          'controller' : ['base', 'crud_controller']
        }
      
    },
    
    specFiles: {
      'ext-mvc/specs': ['setup', 'base', 'router', 'route', 'model', 'controller', 'string']
    }
  });
  
  this.config = config;
  
  Ext.ux.App.SpecRunner.view.Index.superclass.constructor.call(this, config);
  
  this.addEvents({'beforeexecute': true});
  
  //would prefer to listen to render, but at that point the iframe has not yet been created
  this.on('show', this.createIFrame, this);
};


Ext.extend(Ext.ux.App.SpecRunner.view.Index, Ext.Window, {
  
  /**
   * Creates the Managed Iframe (call when the window has been shown or after)
   */
  createIFrame: function() {
    if (!this.iframe) {
      this.iframe = new Ext.ux.ManagedIFrame("specrunner-iframe", {
        loadMask:   true, 
        defaultUrl: "/javascripts/ext-mvc/specs/all.html"
      });
      
      this.iframe.load("/javascripts/ext-mvc/specs/all.html");
      this.iframe.on('domready', this.initIFrame, this);
    };
  },
  
  /**
   * Initializes the JSSpec IFrame by including JSSpec and required code libraries
   */
  initIFrame: function() {
    this.loadJSSpecFiles();
    this.loadRequiredFiles();
    
    if (this.fireEvent('beforeexecute', this)) {
      this.loadSpecFiles();
    }
  },
  
  loadJSSpecFiles: function() {
    this.loadJavaScriptFiles(this.config.JSSpecFiles);
  },
  
  loadRequiredFiles: function() {
    this.loadJavaScriptFiles(this.config.requiredFiles);
  },
  
  loadSpecFiles: function() {
    this.loadJavaScriptFiles(this.config.specFiles);
  },
  
  /**
   * Recursively loads the passed object into the iFrame. Usage:
   * loadJavaScriptFiles({'ext': ['adapter/ext/ext-base', 'ext-all']})
   * is equivalent to including:
   * /javascripts/ext/adapter/ext/ext-base.js
   * /javascripts/ext/ext-all.js
   * @param {Mixed} files A hierarchical object of javascript files to include in the iFrame
   */
  loadJavaScriptFiles: function(files, directory) {
    var directory = directory || '';
    
    for (index in files) {
      if (typeof(files[index]) == 'string') {
        this.loadJavaScriptFile(this.fullFilePath(files[index], directory));
      } else if (typeof(files[index]) == 'object') {
        this.loadJavaScriptFiles(files[index], (index.length == 0 ? directory : directory + "/" + index));
      };      
    }
  },
  
  loadJavaScriptFile: function(filename) {
    this.iframe.writeScript('', {src:  filename});
  },
  
  fullFilePath: function(filename, directory) {
    var directory = directory || '';
    var regex = /.js$/;
    
    if (!regex.test(filename)) { filename += ".js"; }
    return this.config.filesBaseDirectory + directory + "/" + filename;
  }
});

Ext.reg('spec_runner_window', Ext.ux.App.SpecRunner.view.Index);