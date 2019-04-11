const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
//    const munroView = new Munros(this.container,munro);

const MunroView = function (container, munro){
  this.munroContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function (){
  const munroListItem = document.createElement('li');
  const munroHeading = document.createElement('h3');
  munroHeading.textContent=this.munro.name;
  munroListItem.classList.add('munro');
  munroListItem.appendChild(munroHeading);
  const munroDetails = document.createElement('ul');
  const munroMeaningLI = document.createElement('li');
  munroMeaningLI.textContent = this.munro.meaning;
  const munroHeightLI = document.createElement('li');
  munroHeightLI.textContent = this.munro.height;
  munroDetails.appendChild(munroMeaningLI);
  munroDetails.appendChild(munroHeightLI);
  munroListItem.appendChild(munroDetails);
  this.munroContainer.appendChild(munroListItem);
};


module.exports = MunroView;
