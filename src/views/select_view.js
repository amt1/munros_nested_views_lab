const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(container) {
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-data-ready', (event) => {
    const munroData = event.detail;
    const munroFilteredRegionsData = this.filterData(munroData);
    console.log(munroFilteredRegionsData);
    this.populate(munroFilteredRegionsData);
  });
};

SelectView.prototype.filterData = function (allData) {
  return allData.map(munro => munro.region)
  .filter((region, index, regions) => regions.indexOf(region) === index);
};

SelectView.prototype.populate = function (filteredData) {
  filteredData.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = index;
    this.container.appendChild(option);
  });
};

module.exports = SelectView;
