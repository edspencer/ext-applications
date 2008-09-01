/**
 * Ext.ux.App.SpecRunner.view.Help
 * @extends Ext.ux.App.view.GenericHelpWindow
 * Displays help for the Spec Runner application
 */
Ext.ux.App.SpecRunner.view.Help = function(config) {
  var config = config || {};
  
  Ext.applyIf(config, {
    title: 'Spec Runner Help',
    html: [
      {tag: 'h1', html: 'Spec Runner Help'},
      {tag: 'p',  html: 'The Spec Runner application runs a JSSpec test suite'}
    ]
  });
  
  Ext.ux.App.SpecRunner.view.Help.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.App.SpecRunner.view.Help, Ext.ux.App.view.GenericHelpWindow);
Ext.reg('spec_runner_help_window', Ext.ux.App.SpecRunner.view.Help);