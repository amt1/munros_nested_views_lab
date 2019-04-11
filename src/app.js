const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js');
const MunroView = require('./views/munro_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munros = new Munros();
  munros.getData();

  const munroListContainer = document.querySelector('section#munro-list');

  const munroListView = new MunroListView(munroListContainer);
  munroListView.bindEvents();




});
