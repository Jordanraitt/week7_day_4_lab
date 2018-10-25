const PubSub = require("../helper/pub_sub.js");
const MountainView = require("./mountain_view.js");

const MountainsListView = function (container) {
this.container = container;
}

MountainsListView.prototype.bindEvents = function() {
  PubSub.subscribe('Mountains:data-ready', (evt) => {
    this.mountains = evt.detail;
    this.render();
  });
};

MountainsListView.prototype.render = function () {
  this.mountains.forEach((mountain) => {
    const mountainView = new MountainView(this.container, mountain);
    mountainView.render();
  });
};

module.exports = MountainsListView;
