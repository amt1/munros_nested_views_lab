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
      PubSub.publish('Munros:munros-data-ready', this.data);
    });
};

Munros.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:region-selected', (event) => {
    const regionIndex = event.detail;
    const regionMunros = this.findRegion(regionIndex);
  });
};

Munros.prototype.findRegion = function (index){
  const filteredData = this.data.filter((munro)=> {
    // const result = words.filter(word => word.length > 6);

  })
};


module.exports = Munros;
