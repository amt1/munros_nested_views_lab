const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
//    const munroView = new Munros(this.container,munro);

const MunroView = function (container, munro){
  this.munroContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function (){
  const munroListItem = document.createElement('li');
  munroListItem.classList.add('munro');

  const munroHeading = this.createElement('h3', this.munro.name);
  munroListItem.appendChild(munroHeading);

  const munroDetails = document.createElement('ul');

  const munroMeaningLI = this.createElement('li', this.munro.meaning);
  const munroHeightLI = this.createElement('li', this.munro.height);
    
  munroDetails.appendChild(munroMeaningLI);
  munroDetails.appendChild(munroHeightLI);
  munroListItem.appendChild(munroDetails);
  this.munroContainer.appendChild(munroListItem);
};

// helper functions

MunroView.prototype.createElement = function(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
};

module.exports = MunroView;
