function RandomPlacementLeftAngleLines(){
    ///set size:
    random_W = Math.floor(Math.random() * 200) + 150; //number from 5 to 95
    ///set position: ///(left = X.Xdec%; top = Y.Ydec%;)
    // random_X = Math.floor(Math.random() * 1100); //number from 5 to 95
    random_X = Math.floor(Math.random() * 3000) - 1000; //number from -1000 to 2000
    random_Y = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Xdec = Math.floor(Math.random() * 99); //number from 5 to 95
    random_Ydec = Math.floor(Math.random() * 99); //number from 5 to 95
    // RandomPlacement = "position: absolute;" + "left:" + random_X + "." + random_Xdec + "px; top: -3000px !important;"
    // RandomPlacement = "position: absolute; rotate: 45deg !important;" + "left:" + random_X + "." + random_Xdec + "px; top: 500px !important; z-index: 555005;"
    RandomPlacement = "position: absolute; transform: skew(0deg ,-45deg); left:" + random_X + "px; top: -200px !important; z-index: 5555005;";
    // RandomPlacement = "position: absolute; rotate: 5deg;" + "left:" + random_X + "." + random_Xdec + "px; top: -3000px !important;"

    ///set scale:
    RandScaleA = 1;
    // RandScaleA = Math.floor(Math.random() * 2); //number from 0 to 2
    RandScaleB = Math.floor(Math.random() * 99); //number from 0 to 99
    RandomScale = "scale:" + RandScaleA + "." + RandScaleB + ";"; //"scale: 0.5; 1.0, ...." 

    ///set color:
    Random_R = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_G = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_B = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_A = 0;
    Random_Adec = Math.floor(Math.random() * 650); //number from 0 to 650
    RandomColor = "background-color: rgba(" + Random_R + "," + Random_G + "," + Random_B + "," + Random_A + "." + Random_Adec + ");"; ///Color: rgba (255, 255, 255, 1)

    let OutputSquareItem = document.createElement('div');

    OutputSquareItem.setAttribute("style", squareItemStyleAttr + RandomPlacement + RandomScale + RandomColor + "block-size: 75%; width: 150%");

    document.getElementById('imageOutputContainer').appendChild(OutputSquareItem);
}

function RandomPlacementRightAngleLines(){
    ///set size:
    random_W = Math.floor(Math.random() * 200) + 150; //number from 5 to 95
    // random_H = Math.floor(Math.random() * 110); //number from 5 to 95
    ///set position: left = X.Xdec%; top = Y.Ydec%;
    random_X = Math.floor(Math.random() * 3000) - 1000; //number from -1000 to 2000
    // random_X = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Y = Math.floor(Math.random() * 1100) + (-500); //number from 5 to 95
    random_Xdec = Math.floor(Math.random() * 99); //number from 5 to 95
    random_Ydec = Math.floor(Math.random() * 99); //number from 5 to 95
    RandomPlacement = "position: absolute; transform: skew(0deg, 45deg); left:" + random_X + "px; top: -200px !important; z-index: 5555005;";


    ///set scale:
    RandScaleA = 1;
    // RandScaleA = Math.floor(Math.random() * 2); //number from 0 to 2
    RandScaleB = Math.floor(Math.random() * 99); //number from 0 to 99
    RandomScale = "scale:" + RandScaleA + "." + RandScaleB + ";"; //"scale: 0.5; 1.0, ...." 

    ///set color:
    Random_R = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_G = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_B = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_A = 0;
    Random_Adec = Math.floor(Math.random() * 650); //number from 0 to 650
    RandomColor = "background-color: rgba(" + Random_R + "," + Random_G + "," + Random_B + "," + Random_A + "." + Random_Adec + ");"; ///Color: rgba (255, 255, 255, 1)

    let OutputSquareItem = document.createElement('div');

    OutputSquareItem.setAttribute("style", squareItemStyleAttr + RandomPlacement + RandomScale + RandomColor + "block-size: 100%; width: 150%");
    // OutputSquareItem.setAttribute("style", squareItemStyleAttr + RandomPlacement + RandomScale + RandomColor + "width: 765000px; block-size:" + random_H + "px;");

    document.getElementById('imageOutputContainer').appendChild(OutputSquareItem);
}