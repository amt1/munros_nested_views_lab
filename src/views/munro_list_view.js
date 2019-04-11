const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

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
    console.log(this.munroList);
};


module.exports = MunroListView;
