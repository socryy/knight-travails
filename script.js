function getPaths(start) {
  x = [
    start[0] + 2,
    start[0] + 2,
    start[0] - 2,
    start[0] - 2,
    start[0] + 1,
    start[0] + 1,
    start[0] - 1,
    start[0] - 1,
  ];
  y = [
    start[1] - 1,
    start[1] + 1,
    start[1] + 1,
    start[1] - 1,
    start[1] + 2,
    start[1] - 2,
    start[1] + 2,
    start[1] - 2,
  ];

  let arr = [];

  for (let i = 0; i < 8; i++) {
    if (x[i] >= 0 && x[i] <= 7 && y[i] >= 0 && y[i] <= 7) {
      let newArray = [x[i], y[i]];
      arr.push(newArray);
    }
  }
  return arr;
}
function createBoard() {
  let board = [];

  for (let i = 0; i < 8; i++) {
    board[i] = [];

    for (let j = 0; j < 8; j++) {
      board[i][j] = "";
    }
  }
  return board;
}
