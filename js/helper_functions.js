var getCurrentObject =  () => objects.find(object => object.state === 'falling');
var createPlayground = () => (new Array(10).fill().map( el => (new Array(5).fill())));

function isOnTop() {
  let object = getCurrentObject();
  let rowUnder = object.position.reduce((x, y) => (Math.min(x, y[0])), 10) - 1;
  let staticObjects =  objects.filter((object) => object.state === 'static');

  for (let object of staticObjects) {
    for (let coordinate of object.position) {
      if (coordinate[0] == rowUnder && playground[rowUnder + 1][coordinate[1]] != undefined)
        return true;
    }
  }
};
