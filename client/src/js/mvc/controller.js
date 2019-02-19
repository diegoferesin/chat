const Controller = function ControllerFn(model) {
  this.model = model;
};

Controller.prototype.addMessage = function add(message) {
  this.model.addMessage(message);
};

Controller.prototype.deleteMessage = function add(messageId) {
  this.model.deleteMessage(messageId);
};

Controller.prototype.editMessage = function add(messageId, newMessage) {
  this.model.editMessage(messageId, newMessage);
};
