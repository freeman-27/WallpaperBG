function RandomPlacementVerticalLines(){
    ///set size:
    random_W = Math.floor(Math.random() * 110); //number from 5 to 95
    ///set position: left = X.Xdec%; top = Y.Ydec%;
    random_X = Math.floor(Math.random() * 1100); //number from 5 to 95
    random_Y = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Xdec = Math.floor(Math.random() * 99); //number from 5 to 95
    random_Ydec = Math.floor(Math.random() * 99); //number from 5 to 95
    RandomPlacement = "position: absolute;" + "left:" + random_X + "." + random_Xdec + "px; top: -3000px !important;"

    ///set scale:
    RandScaleA = Math.floor(Math.random() * 2); //number from 0 to 2
    RandScaleB = Math.floor(Math.random() * 99); //number from 0 to 99
    RandomScale = "scale:" + RandScaleA + "." + RandScaleB + ";"; //"scale: 0.5; 1.0, ...." 

    ///set color:
    Random_R = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_G = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_B = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_A = 0;
    Random_Adec = Math.floor(Math.random() * 999); //number from 0 to 999 
    RandomColor = "background-color: rgba(" + Random_R + "," + Random_G + "," + Random_B + "," + Random_A + "." + Random_Adec + ");"; ///Color: rgba (255, 255, 255, 1)

    let OutputSquareItem = document.createElement('div');

    OutputSquareItem.setAttribute("style", squareItemStyleAttr + RandomPlacement + RandomScale + RandomColor + "block-size: 765000px; width:" + random_W + "px;");

    document.getElementById('imageOutputContainer').appendChild(OutputSquareItem);
}

function RandomPlacementHorisontalLines(){
    ///set size:
    random_H = Math.floor(Math.random() * 110); //number from 5 to 95
    ///set position: left = X.Xdec%; top = Y.Ydec%;
    random_X = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Y = Math.floor(Math.random() * 1100) + (-500); //number from 5 to 95
    random_Xdec = Math.floor(Math.random() * 99); //number from 5 to 95
    random_Ydec = Math.floor(Math.random() * 99); //number from 5 to 95
    RandomPlacement = "position: absolute;" + "top:" + random_Y + "." + random_Ydec + "px; left: -3000px !important;"

    ///set scale:
    RandScaleA = Math.floor(Math.random() * 2); //number from 0 to 2
    RandScaleB = Math.floor(Math.random() * 99); //number from 0 to 99
    RandomScale = "scale:" + RandScaleA + "." + RandScaleB + ";"; //"scale: 0.5; 1.0, ...." 

    ///set color:
    Random_R = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_G = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_B = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_A = 0;
    Random_Adec = Math.floor(Math.random() * 999); //number from 0 to 999 
    RandomColor = "background-color: rgba(" + Random_R + "," + Random_G + "," + Random_B + "," + Random_A + "." + Random_Adec + ");"; ///Color: rgba (255, 255, 255, 1)

    let OutputSquareItem = document.createElement('div');

    OutputSquareItem.setAttribute("style", squareItemStyleAttr + RandomPlacement + RandomScale + RandomColor + "width: 765000px; block-size:" + random_H + "px;");

    document.getElementById('imageOutputContainer').appendChild(OutputSquareItem);
}