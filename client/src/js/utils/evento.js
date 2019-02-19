const Evento = function(emisor) {
  this.observadores = [];
  this.sujeto = emisor;
};

Evento.prototype = {
  notificar: function() {
    for (let i = 0; i < this.observadores.length; i++) {
      this.observadores[i](this.sujeto);
    }
  },
  suscribir: function(observador) {
    this.observadores.push(observador);
  }
};
