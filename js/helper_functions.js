var getCurrentObject =  () => objects.find(object => object.state === 'falling');
var createPlayground = () => (new Array(10).fill().map( el => (new Array(5).fill())));

function isOnTop() {
  let basicObject = getCurrentObject();
  let staticObjects =  objects.filter((object) => object.state === 'static');

  for (let object of staticObjects) {
    for (let coordinate of object.position) {
      for (let basicCoordinate of basicObject.position) {
          if (basicCoordinate[0] == coordinate[0] + 1 && basicCoordinate[1] == coordinate[1])
            return true;
      }
    }
  }
  return false;
};
