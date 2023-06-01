var board;
var score=0;
var  rows= 4;
var columns =4;
window.onload=function(){
    setGame();
}
function setGame(){
    board =[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
    for(let r= 0;r<rows;r++){
        for(let c=0;c<columns;c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-"  + c.toString(); 
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}
function updateTile(tile, num){
    tile.innertext="";
    tile.classList.value="";
    tile.classlist.add("tile");
    if(num> 0){
        tile.innertext = num;
        if(num <= 2048){
            tile.classList.add("x"+num.toString());
        }
        else{
            tile.classList
        }
    }
}