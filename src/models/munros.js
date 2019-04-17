const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.data = null;
};

Munros.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/munros';
  const request = new Request(url);
  request.get()
    .then( (munrosData)=>{
      this.data = munrosData;
      console.log(this.data);
      PubSub.publish('Munros:munros-data-ready', this.data);
    });
};

Munros.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:region-selected', (event) => {
    const region =  event.detail;
    console.log('region: ', region);
    this.munroList = this.findByRegion(region);
    console.log('munro list: ', this.munroList);
    PubSub.publish('Munros:munros-data-ready', this.munroList);
  });

};

Munros.prototype.findByRegion = function (regionSelected){
//    console.log('filtered data:', this.data.filter(munro => regionSelected == munro.region));
return this.data.filter(munro => regionSelected == munro.region);
};


module.exports = Munros;
