const userName = prompt('¿Cómo te llamás?');

let model;
let controller;
let view;

function init() {
  model = new Model(userName);
  controller = new Controller(model);
  view = new View(model, controller);
}

init();
