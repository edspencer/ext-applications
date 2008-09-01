/**
 * Ext.ux.App.SpecRunner.SpecRunnerController
 * @extends Ext.ux.App.Controller
 * Description
 */
Ext.ux.App.SpecRunner.SpecRunnerController = function(config) {
  var config = config || {};
  Ext.apply(this, config);
  
  this.viewsPackage = "Ext.ux.App.SpecRunner.view";
  this.viewWindowNamespace = 'spec-runner';
  
  Ext.ux.App.SpecRunner.SpecRunnerController.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.SpecRunner.SpecRunnerController, Ext.ux.App.Controller);