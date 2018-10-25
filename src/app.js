const MountainsListView = require("./views/mountains_list_view.js");
const Mountains = require("./models/mountains.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hi Jordan and Oksana! How are things? Good Luck! JavaScript Loaded');

  const MountainsListViewContainer = document.querySelector("#mountains");
  const mountainsListView = new MountainsListView(MountainsListViewContainer);
  mountainsListView.bindEvents();

  const mountains = new Mountains();
  mountains.getData();
});
