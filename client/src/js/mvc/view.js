const View = function ViewFn(model, controller) {
  this.model = model;
  this.controller = controller;

  this.$form = $('#js-form');
  this.$input = $('#js-input');
  this.$list = $('#js-list');

  this.$form.on('submit', this.onFormSubmit.bind(this));

  this.model.update.suscribir(this.update.bind(this));
  this.model.delete.suscribir(this.update.bind(this));
  this.model.edit.suscribir(this.update.bind(this));

  this.scrollingElement = document.scrollingElement || document.body;

  this.update();
};

View.prototype.onDeleteMessage = function onDeleteMessageFn(event) {
  const messageId = $(event.target).data('message-id');

  this.controller.deleteMessage(messageId);
};

View.prototype.onEditMessage = function onEditMessageFn(event) {
  const newMessage = prompt(
    'Edite su mensaje',
    $(event.target)
      .parent()
      .find('.user-message')
      .text()
  );

  if (!newMessage) {
    return;
  }

  const messageId = $(event.target).data('message-id');

  this.controller.editMessage(messageId, newMessage);
};

View.prototype.onFormSubmit = function onFormSubmitFn(event) {
  event.preventDefault();

  const message = this.$input.val();

  this.controller.addMessage(message);

  this.$input.val('');
};

View.prototype.update = function updateFn() {
  this.model.get(onSuccess.bind(this), onError.bind(this));
};

function formatDate(date) {
  const originalDate = new Date(date);

  return `${originalDate.getHours()}:${originalDate.getMinutes()}:${originalDate.getSeconds()}, ${originalDate.getDate()}/${originalDate.getMonth() +
    1}/${originalDate.getFullYear()}`;
}

function onError(error) {
  console.log(error);
}

function onSuccess(data) {
  const forEach = function(message) {
    this.$list.append(
      '<li class="message">' +
        '<span class="user-name">' +
        message.user_name +
        '</span>' +
        ': ' +
        '<span class="user-message">' +
        message.mensaje +
        '</span>' +
        '<br />' +
        '<p class="time">' +
        formatDate(message.fecha) +
        '</p>' +
        (message.user_name === this.model.user_name
          ? '<br />' +
            '<button class="message-button js-edit-button" data-message-id="' +
            message.id +
            '">Editar</button>' +
            '<button class="message-button js-delete-button" data-message-id="' +
            message.id +
            '">Eliminar</button>'
          : '') +
        '</li>'
    );
  };

  this.$list.empty();

  data.forEach(forEach.bind(this));

  $('.js-edit-button').off('click');
  $('.js-delete-button').off('click');

  $('.js-edit-button').on('click', this.onEditMessage.bind(this));
  $('.js-delete-button').on('click', this.onDeleteMessage.bind(this));

  this.scrollingElement.scrollTop = this.scrollingElement.scrollHeight;
}
