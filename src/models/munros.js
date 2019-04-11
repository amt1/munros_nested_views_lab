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
    });
};

module.exports = Munros;
