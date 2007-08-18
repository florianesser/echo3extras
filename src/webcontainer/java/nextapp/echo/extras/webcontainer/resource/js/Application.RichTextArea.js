/**
 * Creates a new RichTextArea.
 * 
 * @constructor
 * @class RichTextArea component.
 * @base EchoApp.Component
 */
ExtrasApp.RichTextArea = function(renderId) {
    EchoApp.Component.call(this, renderId);
    this.componentType = "ExtrasApp.RichTextArea";
};

ExtrasApp.RichTextArea.prototype = EchoCore.derive(EchoApp.Component);

EchoApp.ComponentFactory.registerType("ExtrasApp.RichTextArea", ExtrasApp.RichTextArea);