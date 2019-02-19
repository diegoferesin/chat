const Model = function ModelFn(user_name) {
  this.messages = [];

  this.delete = new Evento(this);
  this.edit = new Evento(this);
  this.update = new Evento(this);

  this.user_name = user_name;
};

Model.prototype.addMessage = function addMessageFn(message) {
  const onErrorCb = function(error) {
    console.log(error);
  };
  const onSuccessCb = function() {
    this.update.notificar();
  };

  fetch('http://localhost:4000/mensajes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      message: message,
      user_name: this.user_name
    })
  })
    .then(response => response.json())
    .then(onSuccessCb.bind(this))
    .catch(onErrorCb.bind(this));
};

Model.prototype.deleteMessage = function deleteMessageFn(messageId) {
  const onErrorCb = function(error) {
    console.log(error);
  };
  const onSuccessCb = function() {
    this.delete.notificar();
  };

  fetch('http://localhost:4000/mensajes/' + messageId, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(onSuccessCb.bind(this))
    .catch(onErrorCb.bind(this));
};

Model.prototype.editMessage = function editMessageFn(messageId, newMessage) {
  const onErrorCb = function(error) {
    console.log(error);
  };
  const onSuccessCb = function() {
    this.edit.notificar();
  };

  fetch('http://localhost:4000/mensajes/' + messageId, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      message: newMessage
    })
  })
    .then(response => response.json())
    .then(onSuccessCb.bind(this))
    .catch(onErrorCb.bind(this));
};

Model.prototype.get = function getFn(onSuccess, onError) {
  const onErrorCb = function(error) {
    onError(error);
  };
  const onSuccessCb = function(data) {
    this.messages = data;
    onSuccess(this.messages);
  };

  fetch('http://localhost:4000/mensajes')
    .then(response => response.json())
    .then(onSuccessCb.bind(this))
    .catch(onErrorCb.bind(this));
};
