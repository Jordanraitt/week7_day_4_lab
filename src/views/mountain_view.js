const MountainView = function (container, mountain) {
  this.munroContainer = container;
  this.mountain = mountain;
console.log(this);
};

MountainView.prototype.render = function (mountain) {

  // const munroContainer = document.createElement('div');
  // munroContainer.classList.add('mountain');

  const name = this.createMountainHeading();
  munroContainer.appendChild(name);

  // const munroList = this.createMunroList();
  // munroContainer.appendChild(munroList);
  //
  // this.munroContainer.appendchild(munroContainer);
};


  MountainView.prototype.createMountainHeading = function (){
  const name = document.createElement('h2');
  name.classList.add('mountain-name');
  name.textContent = this.mountain.name;
  return name;
  }

  // MountainView.prototype.createMunroList = function () {
  //   const munroList = document.createElement('ul');
  //   munroList.classList.add('munros');
  //   this.populateList(munroList);
  //   return munroList;
  // };
  //
  // MountainView.prototype.populateList = function (list) {
  //   this.mountains.forEach((mountain) =>{
  //     const mountainListItem = document.createElement('li');
  //     mountainListItem.textContent = mountain.height;
  //     list.appendChild(mountainListItem);
  //   })
  // }

module.exports = MountainView;
