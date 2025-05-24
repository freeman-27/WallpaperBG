function RandomPlacementTriangles(){
    ///set position: left = X.Xdec%; top = Y.Ydec%;
    random_X = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Y = Math.floor(Math.random() * 110); //number from 5 to 95
    random_Xdec = Math.floor(Math.random() * 99); //number from 5 to 95
    random_Ydec = Math.floor(Math.random() * 99); //number from 5 to 95
    RandomPlacement = "position: absolute;" + "left:" + random_X + "." + random_Xdec + "%; top:" + random_Y + "." + random_Ydec + "%;"

    ///set scale:
    RandScaleA = Math.floor(Math.random() * 5) + 2; //number from 2 to 5
    RandScaleB = Math.floor(Math.random() * 99); //number from 0 to 99
    RandomScale = "scale:" + RandScaleA + "." + RandScaleB + ";"; //"scale: 0.5; 1.0, ...." 

    ///set color:
    Random_R = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_G = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_B = Math.floor(Math.random() * 240) + 50; //number from 50 to 240
    Random_A = 0;
    Random_Adec = Math.floor(Math.random() * 999); //number from 0 to 999 
    RandomColor = Random_R + "," + Random_G + "," + Random_B + "," + Random_A + "." + Random_Adec; ///Color: rgba (255, 255, 255, 1)
    // RandomColor = Random_R + "," + Random_G + "," + Random_B; ///Color: rgb (255, 255, 255)

    let OutputTriangleItem = document.createElement('div');

    triangleItemStyleAttr = "width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 50px solid rgba(" + RandomColor +");";
    let newAttrs = triangleItemStyleAttr + RandomPlacement + RandomScale;

    OutputTriangleItem.setAttribute("style", newAttrs);

    document.getElementById('imageOutputContainer').appendChild(OutputTriangleItem);
}