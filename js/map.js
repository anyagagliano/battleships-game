/*
 *
 * I den här filen har vi lite hjälpfunktioner för att hantera kartan åt oss.
 * 
 */

/*
 * buildMap
 *
 * Denna funktion ritar ut hela kartan från början.
 * För varje ruta som ska finnas på kartan (dvs storleken på vår map), 
 * rita vatten-rutor överallt, alltså inga skepp!
 * Var skeppen finns är ju hemligt från början!
 * 
 * Notera:
 * Alla vatten-rutor som ritas ut klassificeras som square: class="square"
 * De får också ett eget id-nummer: id=${i}
 * Det är bara för att vi ska kunna fånga upp klicken på dem senare och veta exakt vilken ruta det är.
 * 
 * Vår sida kommer efter att denna funktion har körts se ut så här:
 * ---------------------------
 * <div id=0 class="square"><img src="water.jpg" width="50"/></div>
 * <div id=1 class="square"><img src="water.jpg" width="50"/></div>
 * <div id=2 class="square"><img src="water.jpg" width="50"/></div>
 * ...
 * <div id=34 class="square"><img src="water.jpg" width="50"/></div>
 * <div id=35 class="square"><img src="water.jpg" width="50"/></div>
 * ------------
 * ... dvs en massa bilder på vatten.
 * 
 */
function buildMap(ourMap){
    //För varje ruta på kartan...
    for (let i=0; i<ourMap.length; i++) {
        //Lägg till ett nytt div-element som har klassen square och ett id som motsvarar index i arrayen map.
        $(".containerRow").append(`<div id=${i} 
        class="square"><img src="Sea.jpg" 
        width="${squareSize}"/></div>`);
    }
}

//Räkna ut hur många skepps-rutor det finns på kartan...
function getNumberOfShipsOnMap(ourMap){
    let numShips = 0;
    //För varje ruta i map...
    for (let square of ourMap){ 
        if (square>0){ //om rutan är större än 0...
            numShips++; //öka antal skeppsrutor
        }
    }
    return numShips;
}
