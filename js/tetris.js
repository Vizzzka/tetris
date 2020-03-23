var playground = createPlayground();

console.log(playground);

// will add object positions to the emply playground array
function renderPositions() {
  objects.forEach( object => {
    object.position.forEach( ([rowIndex, cellIndex]) => {
      playground[rowIndex][cellIndex] = TYPE_COLORS[object.type]
    })
  });
}

function moveDown(obj) {
  console.log('moving down')
  // 1. get current object - done
  let currentObject = getCurrentObject();
  if (currentObject == undefined)
    return;

  // 2. re-define objects - done
  console.log(objects)
  let flag = currentObject.position.reduce((accumulator, currentValue) => accumulator || currentValue[0] <= 0, false);
  if (flag) return;
  currentObject.position.forEach(position => (position[0] -= 1))

  // 3. re-define clear playground
  playground = createPlayground();

  // 4. re-renderPositions
  // 5. re-renderPlayground
  renderPlayground();

  // 6 check is on Top
  if (isOnTop()) {
    currentObject.state = "static";
    console.log("static");
  }
}

function moveRight(obj) {
  console.log('moving right')
  let currentObject = getCurrentObject();
  if (currentObject == undefined)
    return;

  let flag = currentObject.position.reduce((accumulator, currentValue) => accumulator || currentValue[1] >= 4, false);
  if (flag) return;
  currentObject.position.forEach(position => ((position[1] += 1)));

  playground = createPlayground();
  renderPlayground();
  console.log(currentObject);

  if (isOnTop()) {
    currentObject.state = "static";
    console.log("static");
  }
}

function moveLeft(obj) {
  console.log('moving left')
  let currentObject = getCurrentObject();
  if (currentObject == undefined)
    return;

  let flag = currentObject.position.reduce((accumulator, currentValue) => accumulator || currentValue[1] <= 0, false);
  if (flag) return;
  currentObject.position.forEach(position => (position[1] -= 1));


  playground = createPlayground();
  renderPlayground();
  console.log(currentObject);

  if (isOnTop()) {
    currentObject.state = "static";
    console.log("static");
  }
}

function pauseGame() {
  console.log('pausing the game')
  clearInterval(gameInterval);
}

function createObj() {
  let type = Object.keys(TYPE_COLORS)[Math.floor(Math.random() * 3)];
  let initial_pos = INITIAL_POSITIONS[type];
  for (let pos of initial_pos) {
    if (playground[pos[0]][pos[1]] != undefined) {
      GameOver();
    }
  }

  objects.push({
    type: type,
    state: "falling",
    position: initial_pos
  });

  playground = createPlayground();
  renderPlayground();
}

function GameOver() {
  clearInterval(gameInterval);
  window.alert("Game over");
}

// Events
// 1. move to bottom
// 2. move right
// 3. move left
// 4. pause
// 5. game over
// 6. (re)render playground

renderPlayground();

// interval 1 second
var gameInterval = setInterval(() => {
  if (getCurrentObject() == undefined) {
    createObj();
  }
  moveDown();
}, 4000);
