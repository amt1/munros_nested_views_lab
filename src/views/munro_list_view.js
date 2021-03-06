const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');
const Munros = require('../models/munros.js');

const MunroListView = function(container){
  this.container = container;
};

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-data-ready', (event)=>{
    this.munroList = event.detail;
    this.render();
  });

};

MunroListView.prototype.render = function () {
  this.container.innerHTML = '';
  const munroListUL = document.createElement('ul');
  munroListUL.id="list-munros-here";
  this.container.appendChild(munroListUL);
    this.munroList.forEach((munro)=>{
    const munroView = new MunroView(munroListUL,munro);
    munroView.render();
  });
};


module.exports = MunroListView;
