document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case DOWN:
      moveDown();
      break;
    case RIGHT:
      moveRight();
      break;
    case LEFT:
      moveLeft();
      break;
    case PAUSE:
      pauseGame();
      break;
    default:
      break;
  }
});
