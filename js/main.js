

let squareSize = 45;




let map = [
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,2,2,2,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,4,0,0,0,0,0,3,0,0,
    0,4,0,0,0,0,0,3,0,0,
    0,4,0,0,0,0,0,3,0,0,
    0,4,0,0,0,0,0,3,0,0,
    0,4,0,0,1,1,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0
];



function updateStatus(newStatusText){
    $("#status").text(newStatusText);  
}


let numHitsToWin = getNumberOfShipsOnMap(map); 


buildMap(map);


$(".square").click(shoot);



function shoot(){
    console.log("shoot!");

    let id = $(this).attr('id');
    console.log(id);


    
    if (map[id] != 0){
        
        numHitsToWin--; 
        $(this).html(`<img src="Ship.jpg" width="45"/>`);  
        updateStatus("You hit it! Launch another!"); 
    }
    else{
        $(this).html(`<img src="None.jpg" width="45"/>`);
        updateStatus("Missed :( Try again!");
    }

    if (numHitsToWin<=0){
        updateStatus("Congratulations! You are a winner!")
    }

}




/*
No.	Class of ship	Size
1	Carrier	5
2	Battleship	4
3	Cruiser	3
4	Submarine	3
5	Destroyer	2
*/