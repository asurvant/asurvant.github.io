function generateGrid() {
  let rowLabels = "abcdefghi";
  let grid = [[],[],[],[],[],[],[],[],[]];

  for (var i = 0; i < rowLabels.length; i++) {
    for (var j = 0; j < 9; j++) {
      grid[i][j] =  "#" + rowLabels[i] + (j + 1);
    }
  };

  return grid;
};


function areRowsValid(board) {
  for (var i = 0; i < board.length; i++) {
    let seen = Array(10).fill(false);

    for (var j = 0; j < board.length; j++) {
      let currentVal = board[i][j];
      if (seen[currentVal] && currentVal !== 0){
        return false;
      } else {
        seen[currentVal] = true;
      }
    }
  }
  return true;
}

function areColsValid(board) {
  for (var i = 0; i < board.length; i++) {
    let seen = [];

    for (var j = 0; j < board.length; j++) {
      if ((seen.indexOf(board[j][i]) > -1) && (board[j][i] > 0)) {
        return false;
      } else {
        seen.push(board[j][i]);
      }
    }
  }

  return true;
}

function unitCheck(board, startingRow, startingCol) {
  let seen = [];
  for (var i = startingRow; i < startingRow + 3; i++) {
    for (var j = startingCol; j < startingCol + 3; j++) {
      if ((seen.indexOf(board[i][j]) > -1) && (board[i][j] > 0)) {
        return false;
      } else {
        seen.push(board[i][j]);
      }
    }
  }
  return true;
}

function areGridsValid(board) {
  let tlu = unitCheck(board, 0, 0);
  let tmu = unitCheck(board, 0, 3);
  let tru = unitCheck(board, 0, 6);

  let mlu = unitCheck(board, 3, 0);
  let mmu = unitCheck(board, 3, 3);
  let mru = unitCheck(board, 3, 6);

  let blu = unitCheck(board, 6, 0);
  let bmu = unitCheck(board, 6, 3);
  let bru = unitCheck(board, 6, 6);

  for (var i = 0; i < 9; i++) {
    if ([tlu, tmu, tru, mlu, mmu, mru, blu, bmu, bru][i] === false) {
      return false;
    }
  }
  return true;
}

function isValidBoard(board) {
  if ((board.length === 9) && (board[0].length === 9)) {
    let rows = areRowsValid(board);
    let cols = areColsValid(board);
    let units = areGridsValid(board);

    for (var i = 0; i < 3; i++) {
      if ([rows, cols, units][i] === false) {

        return false;
      }
    }

    return true;

  } else {
    return false;
  };
};


// let firstTest = [
//   [ 8, 3, 7, 5, 4, 9, 2, 1, 6 ],
//   [ 4, 9, 2, 6, 1, 8, 3, 7, 5 ],
//   [ 6, 1, 5, 7, 3, 2, 9, 4, 8 ],
//   [ 5, 4, 8, 3, 9, 1, 7, 6, 2 ],
//   [ 1, 7, 6, 2, 8, 5, 4, 9, 3 ],
//   [ 9, 2, 3, 4, 7, 6, 8, 5, 1 ],
//   [ 3, 8, 9, 1, 6, 4, 5, 2, 7 ],
//   [ 2, 6, 4, 8, 5, 7, 1, 3, 9 ],
//   [ 7, 5, 1, 9, 2, 3, 6, 8, 4 ]
// ];
//
//
// let correctBreak = [
//   [ 8, 4, 2, 5, 9, 3, 6, 7, 1 ],
//   [ 9, 7, 1, 6, 2, 8, 3, 5, 4 ],
//   [ 5, 3, 6, 7, 4, 1, 8, 2, 9 ],
//   [ 7, 5, 8, 9, 3, 4, 2, 1, 6 ],
//   [ 2, 1, 3, 8, 5, 6, 4, 9, 7 ],
//   [ 4, 6, 9, 1, 7, 2, 5, 8, 3 ],
//   [ 6, 9, 4, 2, 8, 7, 1, 3, 5 ],
//   [ 3, 2, 7, 4, 1, 5, 9, 6, 8 ],
//   [ 1, 8, 5, 3, 6, 9, 7, 4, 2 ] ];
//
let thirdTest = [
  [0,0,0,5,0,0,0,0,0],
  [0,7,0,6,2,0,0,5,0],
  [0,3,0,0,0,0,8,0,9],
  [0,0,8,9,0,0,0,0,6],
  [2,0,0,0,0,0,0,0,7],
  [4,0,0,0,0,2,5,0,0],
  [6,0,4,0,0,0,0,3,0],
  [0,2,0,0,1,5,0,6,0],
  [0,0,0,0,0,9,0,0,0]
];
// let secondTest = [
//   [0,3,7,5,0,9,2,1,0],
//   [4,0,0,6,0,8,0,7,5],
//   [6,0,5,0,3,0,0,0,0],
//   [0,0,0,0,0,1,0,0,2],
//   [0,7,6,0,0,0,4,9,0],
//   [9,0,0,4,0,0,0,0,0],
//   [0,0,0,0,6,0,5,0,7],
//   [2,6,0,8,0,7,0,0,9],
//   [0,5,1,9,0,3,6,8,0]
// ];
//

// let fourthTest = [
//   [0,0,0,5,0,0,0,0,0],
//   [0,7,0,6,2,0,0,5,0],
//   [0,3,0,0,0,0,8,0,9],
//   [0,0,8,9,0,0,0,0,6],
//   [2,0,0,0,0,0,0,0,7],
//   [4,0,0,0,0,2,5,0,0],
//   [6,0,4,0,0,0,0,3,0],
//   [0,2,0,0,1,5,0,6,0],
//   [0,0,0,0,0,9,0,0,3]
// ];

// console.log(isValidBoard(correctBreak));
// console.log(isValidBoard(invalidBreadk));
// console.log(gameBrain(secondTest));
// console.log(derp(secondTest));
// console.log(solve(thirdTest));
// console.log(gameBrain(fourthTest));
// console.log(isValidBoard(fourthTest) === false);
function noZeroes(board) {
  let ans = true;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        ans = false;
      }
    }
  }
  return ans;
}
function deepClone(arr) {
  var len = arr.length;
  var newArr = new Array(len);
  for (var i=0; i<len; i++) {
    if (Array.isArray(arr[i])) {
      newArr[i] = deepClone(arr[i]);
    }
    else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}

function firstEmpty(board) {
  let ans = [];
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        ans.push(i);
        ans.push(j);
      }
    }
  }

  return ans.slice(0,2);
}

function solve(board) {
  if (!isValidBoard(board)) {
    return [];
  } else if (isValidBoard(board) && noZeroes(board)) {
    return board;
  }

  // find an empty tile
  let focus = firstEmpty(board);

  // loop through 1-9 in the tile, calling solve with each one until a match is found
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let berd = deepClone(board);

  while (nums.length > 0) {
    berd[focus[0]][focus[1]] = nums.shift();
    var ans = solve(berd);

    if (isValidBoard(ans) && noZeroes(ans)) {
      nums = [];
    }
  }

  return ans;
}
