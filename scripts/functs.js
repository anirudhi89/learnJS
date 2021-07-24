// functions

// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;

// var length1 = 12;
// var width1 = 14;
// var area1 = length2 * width2;
window.rectanglesAreas = [];

function myFunct(yon, length, width) {
    while (yon != false) {
        x = length * width;
        rectanglesAreas.push(x)
        let resp = window.confirm("Do again? ");
        if (resp == true) {
            z = parseInt(window.prompt("enter a length"))
            w = parseInt(window.prompt("enter a width"))
            myFunct(resp, z, w)
        }
        else break;
    }

    return rectanglesAreas;

}