let grid = [null, null, null, null, null, null, null, null, null];
let currentPlayer = "X";

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

const onCellClick = (obj) => {
    const gridIndex = obj.id
    const isEmpty = grid[gridIndex];
    if (!isEmpty) {
        obj.innerHTML = currentPlayer;
        grid[gridIndex] = currentPlayer;
        setTimeout(() => { checkGrid(); }, 1);
    }
};

const checkGrid = () => {

    for (i = 0; i < win.length; i++){
        const [a,b,c] = win[i];
        if("XXX" == `${grid[a]}${grid[b]}${grid[c]}` || "OOO" == `${grid[a]}${grid[b]}${grid[c]}`){

            document.getElementById(`${a}`).style.color = "#a3082c";
            document.getElementById(`${b}`).style.color = "#a3082c";
            document.getElementById(`${c}`).style.color = "#a3082c";

            setTimeout(() => { 
                alert(`The winner is player ${currentPlayer}`); 
                resetGrid();
            }, 20);                         
            return;
        }
    }

    hasNull = grid.some((value) => {return !value;});
    if(!hasNull){
        alert(`It's a draw!`); 
        resetGrid();
        return;
    }

    currentPlayer = currentPlayer=="X" ? "O" : "X";
}

const resetGrid = () => {
    currentPlayer = "X";
    boxes = document.getElementsByClassName("box");
    for (i = 0; i < 9; i++) {
        boxes[i].innerHTML = "";
        boxes[i].style.color = "white";
        grid[i] = null;
    }
}