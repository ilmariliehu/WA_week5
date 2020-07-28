var counter = 0;
// get the reference for the body
var board = document.getElementById("board");

// creates a <table> element
var tbl = document.createElement("table");

function createTBL(tbl) {
  // creating rows
  for (var r = 0; r < 5; r++) {
    var tr = tbl.insertRow();

    // create cells in row
    for (var c = 0; c < 5; c++) {
      var td = tr.insertCell();
      var text = document.createTextNode("");
      td.appendChild(text);
      //tr.appendChild(td);
    }
    //tbl.appendChild(row); // add the row to the end of the table body
  }
  board.appendChild(tbl); // appends <table> into <board>
}

function onClick(tbl) {
  for (var i = 0; i < tbl.rows.length; i++) {
    for (var j = 0; j < tbl.rows[i].cells.length; j++) {
      tbl.rows[i].cells[j].onclick = function() {
        fillCell(this);
      };
    }
  }
}

function fillCell(td) {
  if (counter % 2 === 0) {
    if (td.innerHTML === "") {
      td.innerHTML = "X";
      checkWin(tbl);
      checkDraw(tbl);
      counter++;
      document.getElementById("info").innerHTML = "Player 2 it's your turn";
      //document.getElementById("c").innerHTML = counter;
    } else {
      alert("This cell has already marking in it");
    }
  } else {
    if (td.innerHTML === "") {
      td.innerHTML = "O";
      checkWin(tbl);
      checkDraw(tbl);
      counter--;
      document.getElementById("info").innerHTML = "Player 1 it's your turn";
      //document.getElementById("c").innerHTML = counter;
    } else {
      alert("This cell has already a marking in it");
    }
  }
}

function clearTBL(tbl) {
  for (var i = 0; i < tbl.rows.length; i++) {
    for (var j = 0; j < tbl.rows[i].cells.length; j++)
      tbl.rows[i].cells[j].innerHTML = "";
  }
  if (counter % 2 === 0) {
    document.getElementById("info").innerHTML = "Player 1 you start";
  } else {
    document.getElementById("info").innerHTML = "Player 2 you start";
  }
  //onClick(tbl);
}

function checkDraw(tbl) {
  var count = 0;
  for (var i = 0; i < tbl.rows.length; i++) {
    for (var j = 0; j < tbl.rows[i].cells.length; j++)
      if (
        tbl.rows[i].cells[j].innerHTML === "X" ||
        tbl.rows[i].cells[j].innerHTML === "O"
      ) {
        count++;
      }
  }
  if (count === 25) {
    alert("It's a draw! Let's restart.");
    clearTBL(tbl);
  }
}

function checkWin(tbl) {
  var xo = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var row1 = 0;
    var row2 = 0;
    var row3 = 0;
    var row4 = 0;
    var row5 = 0;
    var col1 = 0;
    var col2 = 0;
    var col3 = 0;
    var col4 = 0;
    var col5 = 0;
    var diag1 = 0;
    var diag2 = 0;

    for (var j = 0; j < 5; j++) {
      if (tbl.rows[0].cells[j].innerHTML === xo[i]) {
        row1++;
      }
      if (tbl.rows[1].cells[j].innerHTML === xo[i]) {
        row2++;
      }
      if (tbl.rows[2].cells[j].innerHTML === xo[i]) {
        row3++;
      }
      if (tbl.rows[3].cells[j].innerHTML === xo[i]) {
        row4++;
      }
      if (tbl.rows[4].cells[j].innerHTML === xo[i]) {
        row5++;
      }
      if (tbl.rows[j].cells[0].innerHTML === xo[i]) {
        col1++;
      }
      if (tbl.rows[j].cells[1].innerHTML === xo[i]) {
        col2++;
      }
      if (tbl.rows[j].cells[2].innerHTML === xo[i]) {
        col3++;
      }
      if (tbl.rows[j].cells[3].innerHTML === xo[i]) {
        col4++;
      }
      if (tbl.rows[j].cells[4].innerHTML === xo[i]) {
        col5++;
      }
      if (tbl.rows[j].cells[j].innerHTML === xo[i]) {
        diag1++;
      }
      var other = 4 - j;
      if (tbl.rows[j].cells[other].innerHTML === xo[i]) {
        diag2++;
      }
    }
    if (
      row1 === 5 ||
      row2 === 5 ||
      row3 === 5 ||
      row4 === 5 ||
      row5 === 5 ||
      col1 === 5 ||
      col2 === 5 ||
      col3 === 5 ||
      col4 === 5 ||
      col5 === 5 ||
      diag1 === 5 ||
      diag2 === 5
    ) {
      if (xo[i] === "X") {
        alert("Player 1 won!");
        clearTBL(tbl);
      }

      if (xo[i] === "O") {
        alert("Player 2 won!");
        clearTBL(tbl);
      }
    }
  }
}

createTBL(tbl);
onClick(tbl);
