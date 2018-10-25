const Request = require('../helper/request.js');
const PubSub = require('../helper/pub_sub.js');

const Mountains = function () {
  this.data = null;
}

Mountains.prototype.getData = function () {
const url = 'https://munroapi.herokuapp.com/api/munros'
  const request = new Request(url);
  request.get()
      .then((data) =>{
    this.data = data;
    PubSub.publish('Mountains:data-ready', this.data);
  })
};


module.exports = Mountains;
