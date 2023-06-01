var board;
var score=0;
var  rows= 4;
var columns =4;
window.onload=function(){
    setGame();
}
function setGame(){
    board =[
        [2,2,2,2],
        [2,2,2,2],
        [4,4,8,8],
        [4,4,8,8]
    ]
    for(let r= 0;r<rows;r++){
        for(let c=0;c<columns;c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-"  + c.toString(); 
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
}
function updateTile(tile, num){
    tile.innertext="";
    tile.classList.value="";
    tile.classlist.add("tile");
    if(num> 0){
        tile.innerText = num;
        if(num <= 2048){
            tile.classList.add("x"+num.toString());
        }
        else{
            tile.classList.add("x2048");
        }
    }
}