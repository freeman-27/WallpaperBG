function AddToBG(){

}
//set size:
let random_W //width
let random_H //height
//placement vars:
let random_X
let random_Y
let random_Xdec
let random_Ydec
let RandomPlacement
//scale vars:
let RandScaleA
let RandScaleB
let RandomScale
//color vars:
let Random_R
let Random_G
let Random_B
let Random_A //alpha
let Random_Adec //alpha
let RandomColor 
let RandomColorForTriangle

////Create and add random elements
///
///
function RandomPlacement4TypesItems(){
    function GenNewValues(){
    ///set position: left = X.Xdec%; top = Y.Ydec%;
    random_X = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Y = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Xdec = Math.floor(Math.random() * 99); //number from 5 to 95
    random_Ydec = Math.floor(Math.random() * 99); //number from 5 to 95
    RandomPlacement = "position: absolute;" + "left:" + random_X + "." + random_Xdec + "%; top:" + random_Y + "." + random_Ydec + "%;"

    ///set scale:
    RandScaleA = Math.floor(Math.random() * 3) + 1; //number from 1 to 3
    RandScaleB = Math.floor(Math.random() * 99); //number from 0 to 99
    RandomScale = "scale:" + RandScaleA + "." + RandScaleB + ";"; //"scale: 0.5; 1.0, ...." 

    ///set color:
    Random_R = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_G = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_B = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    // Random_A = Math.floor(Math.random() * 1); //number from 0 to 1
    Random_A = 0;
    Random_Adec = Math.floor(Math.random() * 999); //number from 0 to 999 
    RandomColor = "background-color: rgba(" + Random_R + "," + Random_G + "," + Random_B + "," + Random_A + "." + Random_Adec + ");"; ///Color: rgba (255, 255, 255, 1)
    RandomColorForTriangle = Random_R + "," + Random_G + "," + Random_B + "," + Random_A + "." + Random_Adec; ///Color: rgba (255, 255, 255, 1)

    return RandomPlacement, RandomScale, RandomColor, RandomColorForTriangle
    }
    let OutputCircleItem = document.createElement('div');
    GenNewValues();
    OutputCircleItem.setAttribute("style", circleItemStyleAttr + RandomPlacement + RandomScale + RandomColor);
    document.getElementById('imageOutputContainer').appendChild(OutputCircleItem );

    let OutputTriangleItem = document.createElement('div');
    GenNewValues();
    triangleItemStyleAttr = "width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 50px solid rgba(" + RandomColorForTriangle +");";
    let newTriangleItemStyleAttr;
    OutputTriangleItem.setAttribute("style", triangleItemStyleAttr + RandomPlacement + RandomScale);
    document.getElementById('imageOutputContainer').appendChild(OutputTriangleItem);

    let OutputSquareItem = document.createElement('div');
    GenNewValues();
    OutputSquareItem.setAttribute("style", squareItemStyleAttr + RandomPlacement + RandomScale + RandomColor);
    document.getElementById('imageOutputContainer').appendChild(OutputSquareItem );

    let OutputRotatedSquareItem = document.createElement('div');
    GenNewValues();
    OutputRotatedSquareItem.setAttribute("style", rotatedSquareItemStyleAttr + RandomPlacement + RandomScale + RandomColor);
    document.getElementById('imageOutputContainer').appendChild(OutputRotatedSquareItem);
}

function RandomPlacementMixedItems(){
    ///set position: left = X.Xdec%; top = Y.Ydec%;
    random_X = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Y = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Xdec = Math.floor(Math.random() * 99); //number from 5 to 95
    random_Ydec = Math.floor(Math.random() * 99); //number from 5 to 95
    RandomPlacement = "position: absolute;" + "left:" + random_X + "." + random_Xdec + "%; top:" + random_Y + "." + random_Ydec + "%;"

    ///set scale:
    RandScaleA = Math.floor(Math.random() * 2); //number from 0 to 2
    RandScaleB = Math.floor(Math.random() * 99); //number from 0 to 99
    RandomScale = "scale:" + RandScaleA + "." + RandScaleB + ";"; //"scale: 0.5; 1.0, ...." 

    ///set color:
    Random_R = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_G = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_B = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_A = Math.floor(Math.random() * 9) + 3; //number from 3 to 9 

    RandomColor = "background-color: rgba(" + Random_R + "," + Random_G + "," + Random_B + "," + Random_A + ");"; ///Color: rgba (255, 255, 255, 1)

    let OutputSquareItem = document.createElement('div');
    let OutputRotatedSquareItem = document.createElement('div');

    OutputSquareItem.setAttribute("style", squareItemStyleAttr + RandomPlacement + RandomScale + RandomColor);
    OutputRotatedSquareItem.setAttribute("style", rotatedSquareItemStyleAttr + RandomPlacement + RandomScale + RandomColor);

    document.getElementById('imageOutputContainer').appendChild(OutputSquareItem );
    document.getElementById('imageOutputContainer').appendChild(OutputRotatedSquareItem);
}