const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js');
const MunroView = require('./views/munro_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munroSelectContainer = document.querySelector('select#select-munro');
  const munroListContainer = document.querySelector('section#munro-list');

  const selectView = new SelectView(munroSelectContainer);
  selectView.bindEvents();

  const munroListView = new MunroListView(munroListContainer);
  munroListView.bindEvents();

    const munros = new Munros();
    munros.getData();
    munros.bindEvents();



});
