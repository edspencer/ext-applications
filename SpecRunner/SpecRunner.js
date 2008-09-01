/**
 * Ext.ux.App.SpecRunner
 * @extends Ext.ux.App.Base
 * @version 0.1
 * Simple application to show the JSSpecs for an application
 */
Ext.ux.App.SpecRunner = function(config) {
  var config = config || {};
  
  this.version = 0.1;
  
  this.id = 'spec-runner-win';
  
  this.controller = new Ext.ux.App.SpecRunner.SpecRunnerController({app: this});
  
  this.init = function() {
    this.launcher = {
      text:    'JSSpec runner',
      iconCls: 'tick',
      handler: this.launch,
      scope:   this
    };
  };
  
  Ext.ux.App.SpecRunner.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.SpecRunner, Ext.ux.App.Base);

Ext.ns("Ext.ux.App.SpecRunner.view");