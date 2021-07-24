// functions

// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;

// var length1 = 12;
// var width1 = 14;
// var area1 = length2 * width2;


//funct to multiply lenght and width, and add to an array
window.rectanglesAreas = [];

function myFunct(yon, length, width) {
    while (yon != false) {
        x = length * width;
        rectanglesAreas.push(x)
        let resp = window.confirm("Do again? ");
        if (resp == true) {
            let z = parseInt(window.prompt("enter a length"))
            let w = parseInt(window.prompt("enter a width"))
            myFunct(resp, z, w)
        }
        else break;
    }

    return rectanglesAreas;

}