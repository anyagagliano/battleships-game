
//Så här stora ska rutorna vara på spelplanen
let squareSize = 45;



/*
 *
 * id = "s78"
 * y = id[1];
 * x = id[2];
 * s-4-7
 * s-11-15  
 * Detta är vår spelplan. Den motsvaras av en helt vanlig array med siffror i.
 * Siffran 0 betyder att där finns vatten.
 * Siffran 1 betyder att där finns ett (hemligt!) skepp som ska sänkas. Alltså, från början är det hemligt för spelaren...
 *
 * Varje ruta på spelplanen har ett eget id som motsvarar ett index i den här arrayen.
 * <div id=0 class="square"><img src="water.jpg" width="50"/></div>
 * <div id=1 class="square"><img src="water.jpg" width="50"/></div>
 * <div id=2 class="square"><img src="water.jpg" width="50"/></div>
 */
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


//Leta upp HTML-elementet med id = "status". 
function updateStatus(newStatusText){
    $("#status").text(newStatusText);  //Sätt en ny text där: T ex: "Tyvärr, du missade! Skjut igen!"
}

//När man har träffat alla skeppsrutor har man vunnit...
//Så många skeppsrutor finns det på kartan?... vi kollar...
let numHitsToWin = getNumberOfShipsOnMap(map); 

//Bygg upp kartan på spelplanen. Det börjar med vatten överallt.
buildMap(map);

/*
 * När vi klickar på ett element som har class="square", anropa då funktionen som heter shoot()!
 */
$(".square").click(shoot);


/*
 * Någon skjuter på en ruta.
 * Vi använder $(this) för att få reda på vilken ruta.
 * Vi använder $(this).attr('id') för att få reda på vilket ID rutan har.
 * Varje ruta har ett eget id som motsvarar ett index i arrayen map.
 */
function shoot(){
    console.log("shoot!");

    //Vilket id är det på den rutan vi just nu har skjutit på... 
    let id = $(this).attr('id');
    console.log(id);


    //Kolla om den här platsen på kartan innehåller 1. Då är det ett skepp! 
    //T ex... ifall id är 7, då är det index = 7 i arrayen, alltså map[7].
    if (map[id] != 0){
        //Ja, det var ett skepp!  
        numHitsToWin--; //Vi kommer ett steg närmare att vinna!
        $(this).html(`<img src="Ship.jpg" width="45"/>`);  //Uppdatera bilden till ett skepp!
        updateStatus("You hit it! Launch another!"); //Uppdatera status-texten.
    }
    else{
        $(this).html(`<img src="None.jpg" width="45"/>`);
        updateStatus("Missed :( Try again!");
    }

    if (numHitsToWin<=0){
        updateStatus("Congratulations! You are a winner!")
    }

}



//updateSquare(5, "ship.jpg")
/*
No.	Class of ship	Size
1	Carrier	5
2	Battleship	4
3	Cruiser	3
4	Submarine	3
5	Destroyer	2
*/