const PubSub = require('../helpers/pub_sub.js');

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
  const munroMeaningLI = this.createElement('li','Meaning: ' + this.munro.meaning);
  const munroHeightLI = this.createElement('li', 'Height: ' + this.munro.height);
  const munroRegionLI = this.createElement('li', 'Region: ' + this.munro.region);
  munroDetails.appendChild(munroMeaningLI);
  munroDetails.appendChild(munroHeightLI);
  munroDetails.appendChild(munroRegionLI);
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
