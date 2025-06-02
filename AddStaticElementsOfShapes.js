let SetItem 
let SetMixedItem

let ItemStyleProperties
let ContainerProperties //for type 5
// let OutputContainer

//primitives
circleItem;
circleItemStyleAttr = "height: 50px; width: 50px; background-color: #cccccc; border-radius: 50%; position: relative; z-index: 5550005;";
triangleItem;
triangleItemStyleAttr = "width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 50px solid rgb(250, 250, 250);";
squareItem;
squareItemStyleAttr = "height: 50px; width: 50px; background-color: #cccccc;";
rotatedSquareItem;
rotatedSquareItemStyleAttr = "height: 50px; width: 50px; background-color: #cccccc; rotate: 45deg;";
///variables vor mixedshape (type 5)
mixedSquareItem;
mixedSquareItemStyleAttr = "height: 50px; width: 50px; background-color: #cccccc; rotate: 0deg;";
let ItemType5_Pt1
let ItemType5_Pt2
let ItemStyleProperties_Pt1
let ItemStyleProperties_Pt2
///variables vor mixedshape (type 6, 7, 8, 9, 10)
h_lineItem;
v_lineItem;

//properties of primitives:
let Size
let Color
let BGColor
let Opacity

let DefaultSize
let DefColor
let DefOpacity 
let defaultProperties


let SetColorValue

let TypeOfShape

///type 1 - empty shape
///
///type 2
function SetCircleShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = circleItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "#ff0000"};
    SetColorValue = ModifiedColor;
    Size = "scale: 2.0; ";
    Color = "background-color: " + SetColorValue + "; ";
    Opacity = "opacity: 0.55; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 2;
    return ItemStyleProperties, TypeOfShape;
}
///type 3
function SetSquareShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = squareItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "yellowgreen"};
    SetColorValue = ModifiedColor;
    Size = "scale: 2.0; ";
    Color = "background-color: " + SetColorValue + "; ";
    Opacity = "opacity: 0.55; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 3;

    return ItemStyleProperties, TypeOfShape;
}
///type 4
function SetRotatedSquareShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = rotatedSquareItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "green"};
    SetColorValue = ModifiedColor;
    Size = "scale: 2.0; ";
    Color = "background-color: " + SetColorValue + "; ";
    Opacity = "opacity: 0.55; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 4;

    return ItemStyleProperties, TypeOfShape;
}
///type 5
function SetMixedSquareShapeItem(){
    // SetItem = document.createElement('div');
    SetMixedItem = document.createElement('div');
    ItemType5_Pt1 = document.createElement('div');
    ItemType5_Pt2 = document.createElement('div');
    defaultProperties = mixedSquareItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "#888aaa"};
    SetColorValue = ModifiedColor;
    Size = "scale: 2.0;";
    // Color = "background-color: " + SetColorValue + "; ";
    BGColor = "background-image: url(img/MixedSquareItemButtonLightBorder.svg); background-size: cover;";
    Opacity = "opacity: 1; ";
    ContainerProperties = "block-size: 50px; width: 50px; display: block;" + Size + BGColor;
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    ItemStyleProperties_Pt1 = ItemStyleProperties + "rotate: 0deg; position relative; top 0px;";
    ItemStyleProperties_Pt2 = ItemStyleProperties + "rotate: 45deg; position relative; top: -50px !important; ";


    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 5; 
    return ContainerProperties, ItemStyleProperties, ItemStyleProperties_Pt1, ItemStyleProperties_Pt2, TypeOfShape;
}
///type 6
function SetTriangleShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = triangleItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "orange"};
    SetColorValue = ModifiedColor;
    Size = "scale: 2.0; ";
    Color = "border-left: 25px solid transparent !important; border-right: 25px solid transparent !important; border-bottom: 50px solid " + SetColorValue + "!important; ";
    Opacity = "opacity: 0.65; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 6;
    return ItemStyleProperties, TypeOfShape ;
}
///type 7 Set_H_LineShapeItem()
function Set_H_LineShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = rotatedSquareItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "red;"};
    SetColorValue = ModifiedColor;
    Size = "/*scale: 1.0*/; transform: scaleX(100); rotate: 0deg; width: 100px; block:-size: 5px;";
    Color = "background-color:" + SetColorValue + "!important; ";
    Opacity = "opacity: 0.8; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 7;
    return ItemStyleProperties, TypeOfShape ;
}
///type 8 Set_V_LineShapeItem()
function Set_V_LineShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = rotatedSquareItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "red;"};
    SetColorValue = ModifiedColor;
    Size = "/*scale: 1.0*/; transform: scaleX(100); rotate: 90deg; width: 100px; block:-size: 5px;";
    Color = "background-color:" + SetColorValue + "!important; ";
    Opacity = "opacity: 0.8; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 8
    return ItemStyleProperties, TypeOfShape ;
}
///type 9
function SetLeftAngleLineShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = rotatedSquareItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "red;"};
    SetColorValue = ModifiedColor;
    Size = "/*scale: 1.0*/; transform: scaleX(100); rotate: -30deg; width: 100px; block:-size: 5px;";
    Color = "background-color:" + SetColorValue + "!important; ";
    Opacity = "opacity: 0.8; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 9;
    return ItemStyleProperties, TypeOfShape ;
}
///type 10
function SetRightAngleLineShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = rotatedSquareItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "blue;"};
    SetColorValue = ModifiedColor;
    Size = "/*scale: 1.0*/; transform: scaleX(100); rotate: 30deg; width: 100px; block:-size: 5px;";
    Color = "background-color:" + SetColorValue + "!important; ";
    Opacity = "opacity: 0.8; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    TypeOfShape = 10;
    return ItemStyleProperties, TypeOfShape ;
}




//////////////////////////////////////////////////////////////
///Group of functions for items with all types of shapes
///Functions setting numbers, color, opacity, size(scale), random position and adding items to image
///SetNumbersOfItems(), ReturnColor(), SaveItemProperties(), SetRandomPosition(), AddItemToImage(), Add_Few_itemsToimage()
let ModifiedSettings = " "
let ModifiedColor = " "
///
function SaveItemProperties(){
    if (TypeOfShape != 5){
        SetItem.setAttribute("style", ItemStyleProperties);
    } else if (TypeOfShape === 5){
        SetMixedItem.setAttribute("style", ItemStyleProperties);
    }
    document.getElementById('ConfirmShapeSettings').setAttribute("disabled", " ");
    document.getElementById('BtnAddShapeToImage').removeAttribute("disabled");
    return ItemStyleProperties;
}
function SetRandomPosition(){
            ///set random position: left = X.Xdec%; top = Y.Ydec%;
            random_X = Math.floor(Math.random() * 110); //number from 5 to 95
            random_Y = Math.floor(Math.random() * 110); //number from 5 to 95
            random_Xdec = Math.floor(Math.random() * 99); //number from 5 to 95
            random_Ydec = Math.floor(Math.random() * 99); //number from 5 to 95
            RandomPlacement = "position: absolute;" + "left:" + random_X + "." + random_Xdec + "%; top:" + random_Y + "." + random_Ydec + "%;"
            return RandomPlacement;
}


/// Function for setting numbers of items
/// SetNumbersOfItems()
/// returns NumberOfItems to function Add_10_itemsToimage() //default number is 10
function SetNumbersOfItems(){
    NumberOfItems = document.getElementById("NumbersOfItemsInput").getAttribute("value");
    let Nitems = NumberOfItems.valueOf("value");
    window.alert("Number of items is:", Nitems);

    return NumberOfItems;
}

/// Function ReturnColor() for item of shape
/// Gets Color value from input
/// sends it to aveModifiedSettings()
let NewSize = " ", NewColor = " ", NewOpacity = " "
function ReturnColor(){
    let GetInputColor = document.getElementById("ColorOfItemsInput").value;
    NewColor = GetInputColor;
    console.log("The Color is:" , NewColor);
    console.log("The Color is:" ,  NewColor.toString());
    // window.alert("The Color is:", NewColor);
    return NewColor;
}

///Function SaveModifiedSettings()
///Saving values Size(scale), Color, Opacity 
///returns ModifiedSettings, ModifiedColor
function SaveModifiedSettings(){
    SetItem = document.createElement('div');
    // document.getElementById("ColorOfItemsInput").getAttribute.apply(this);
    // NewColor = document.getElementById("ColorOfItemsInput").getAttribute("value");
    ReturnColor();

    ModifiedColor = NewColor;
    // ModifiedSettings = "block-size:" + NewSize + ";" + "background-color:" + NewColor + ";" + NewOpacity + ";";
    SwitchShape_RadioBtn(1); //reset shape selection
    document.getElementById('ConfirmShapeSettings').setAttribute("disabled", " ");
    document.getElementById('BtnAddShapeToImage').setAttribute("disabled", " ");
    return ModifiedSettings, ModifiedColor;
}




function AddItemToImage(){
    if (TypeOfShape === 5){
        // AddMixedItem();
        AddSvgItem();
    }
    if (TypeOfShape != 5){
    let AddToOutputContainer = document.getElementById("imageOutputContainer");
    SetRandomPosition();
    SetItem = document.createElement('div');
    SetItem.setAttribute("style", ItemStyleProperties + RandomPlacement + ModifiedSettings);
    // AddToOutputContainer.appendChild(SetItem);
    document.getElementById("imageOutputContainer").appendChild(SetItem);
    document.getElementById('ConfirmShapeSettings').setAttribute("disabled", " ");
    }
}

let NumberOfItems = 5;
//default NumberOfItems = 5
// maximum value: 100
function Add_Few_itemsToimage(){
    let i = 1;
    do {
        AddItemToImage();
        i++;
    } while (i < NumberOfItems);
}

// function AddMixedItem(){
//     let AddToOutputContainer = document.getElementById("imageOutputContainer");
//     SetRandomPosition();
//     // SetItem = document.createElement('div');
//     SetMixedItem = document.createElement('div');
//     SetMixedItem.setAttribute("style", ContainerProperties + RandomPlacement);
//     ItemType5_Pt1.setAttribute("style", ItemStyleProperties_Pt1 + ModifiedSettings);
//     ItemType5_Pt2.setAttribute("style", ItemStyleProperties_Pt2 + ModifiedSettings);
//     // SetMixedItem.appendChild(ItemType5_Pt1); 
//     // SetMixedItem.appendChild(ItemType5_Pt2); 
//     document.getElementById("imageOutputContainer").appendChild(SetMixedItem);

//     SetMixedSquareShapeItem(); /// for cycle
//     document.getElementById('ConfirmShapeSettings').setAttribute("disabled", " ");
// }


function AddSvgItem(){
    let AddToOutputContainer = document.getElementById("imageOutputContainer");
    SetRandomPosition();
    SetItem = document.createElement('div');
    let SvgImage = document.createElement('div');
    SvgColorValue = NewColor;
    SvgMixedSquare_Custom = '<svg   width="' + SvgWidthValue + '"   height=" ' + SvgWidthValue + ' "   viewBox="0 0 512 512"   version="1.1"   id="svgMixedSquare"   inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"   sodipodi:docname="MixedSquareItemButtonLightBorder.svg"   inkscape:export-filename="RotatedSquareItemButtonLightBorder.png"   inkscape:export-xdpi="96"   inkscape:export-ydpi="96"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs1" />  <g     inkscape:label="Слой 1"     inkscape:groupmode="layer"     id="layer1"     style="display:none">    <path       sodipodi:type="star"       style="fill:#5522FF;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path4"       inkscape:flatsided="true"       sodipodi:sides="4"       sodipodi:cx="262.5481"       sodipodi:cy="257.55908"       sodipodi:r1="205.91211"       sodipodi:r2="145.60185"       sodipodi:arg1="0"       sodipodi:arg2="0.78539816"       inkscape:rounded="0"       inkscape:randomized="0"       d="M 468.46021,257.55908 262.5481,463.47119 56.635986,257.55908 262.5481,51.646973 Z"       transform="translate(-6.8599269,-2.8599269)" />    <rect       style="fill:#008800;fill-opacity:1;stroke:#ffffff;stroke-width:4.57746;stroke-dasharray:none;stroke-opacity:1"       id="rect1-5"       width="320.42255"       height="320.42255"       x="93.333183"       y="98.321846" />  </g>  <path     id="path6"     style="fill:'+ SvgColorValue +';fill-opacity:'+ SvgOpacity +';stroke:'+ SvgBorderColorValue +';stroke-width:5;stroke-dasharray:none;stroke-opacity:1"     d="M 262.54743 51.647036 L 204.22126 109.97321 L 113.97321 109.97321 L 113.97321 200.22126 L 56.635318 257.55915 L 113.97321 314.89704 L 113.97321 405.74665 L 204.82282 405.74665 L 262.54743 463.47126 L 320.27204 405.74665 L 409.74665 405.74665 L 409.74665 316.27204 L 468.45954 257.55915 L 409.74665 198.84626 L 409.74665 109.97321 L 320.8736 109.97321 L 262.54743 51.647036 z "     transform="translate(-6.8599269,-2.8599269)" /></svg>';
    SvgImage.innerHTML = SvgMixedSquare_Custom;
    SvgImage.setAttribute("style", RandomPlacement);
    SetItem.appendChild(SvgImage); 
    document.getElementById("imageOutputContainer").appendChild(SetItem);
    document.getElementById('ConfirmShapeSettings').setAttribute("disabled", " ");
}


///Svg item MixedSquare
///
///
let  SvgMixedSquare_Default = '<svg   width="512"   height="512"   viewBox="0 0 512 512"   version="1.1"   id="svg1"   inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"   sodipodi:docname="MixedSquareItemButtonLightBorder.svg"   inkscape:export-filename="RotatedSquareItemButtonLightBorder.png"   inkscape:export-xdpi="96"   inkscape:export-ydpi="96"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <sodipodi:namedview     id="namedview1"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:document-units="px"     inkscape:zoom="1.6035156"     inkscape:cx="255.68819"     inkscape:cy="255.37637"     inkscape:window-width="1920"     inkscape:window-height="1017"     inkscape:window-x="-8"     inkscape:window-y="-8"     inkscape:window-maximized="1"     inkscape:current-layer="svg1" />  <defs     id="defs1" />  <g     inkscape:label="Слой 1"     inkscape:groupmode="layer"     id="layer1"     style="display:none">    <circle       style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none;stroke-opacity:1"       id="path1"       cx="256"       cy="256"       r="256" />    <rect       style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:4.57746;stroke-dasharray:none;stroke-opacity:1"       id="rect1"       width="320.42255"       height="320.42255"       x="93.333183"       y="98.321846"       sodipodi:insensitive="true" />    <ellipse       style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path2"       cx="253.19366"       cy="258.80634"       rx="156.53107"       ry="157.15469"       sodipodi:insensitive="true" />    <path       sodipodi:type="star"       style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path3"       inkscape:flatsided="true"       sodipodi:sides="3"       sodipodi:cx="255.68819"       sodipodi:cy="254.44093"       sodipodi:r1="244.98727"       sodipodi:r2="122.49364"       sodipodi:arg1="0.52359878"       sodipodi:arg2="1.5707963"       inkscape:rounded="0"       inkscape:randomized="0"       d="m 467.85339,376.93457 -424.330407,0 L 255.68819,9.4536591 Z"       inkscape:transform-center-y="-59.482564"       transform="matrix(0.97119431,0,0,0.97119431,7.9889041,29.015136)" />    <path       sodipodi:type="star"       style="fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path4"       inkscape:flatsided="true"       sodipodi:sides="4"       sodipodi:cx="262.5481"       sodipodi:cy="257.55908"       sodipodi:r1="205.91211"       sodipodi:r2="145.60185"       sodipodi:arg1="0"       sodipodi:arg2="0.78539816"       inkscape:rounded="0"       inkscape:randomized="0"       d="M 468.46021,257.55908 262.5481,463.47119 56.635986,257.55908 262.5481,51.646973 Z"       transform="translate(-6.8599269,-2.8599269)" />    <rect       style="fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:4.57746;stroke-dasharray:none;stroke-opacity:1"       id="rect1-5"       width="320.42255"       height="320.42255"       x="93.333183"       y="98.321846" />  </g>  <path     sodipodi:type="star"     style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"     id="path5"     inkscape:flatsided="true"     sodipodi:sides="4"     sodipodi:cx="262.5481"     sodipodi:cy="257.55908"     sodipodi:r1="205.91211"     sodipodi:r2="145.60185"     sodipodi:arg1="0"     sodipodi:arg2="0.78539816"     inkscape:rounded="0"     inkscape:randomized="0"     d="M 468.46021,257.55908 262.5481,463.47119 56.635986,257.55908 262.5481,51.646973 Z"     transform="translate(-6.8599269,-2.8599269)"     sodipodi:insensitive="true" />  <rect     style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:4.22535;stroke-dasharray:none;stroke-opacity:1"     id="rect5"     width="295.77466"     height="295.77466"     x="107.11267"     y="107.11268"     sodipodi:insensitive="true" />  <path     id="path6"     style="fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"     d="M 262.54743 51.647036 L 204.22126 109.97321 L 113.97321 109.97321 L 113.97321 200.22126 L 56.635318 257.55915 L 113.97321 314.89704 L 113.97321 405.74665 L 204.82282 405.74665 L 262.54743 463.47126 L 320.27204 405.74665 L 409.74665 405.74665 L 409.74665 316.27204 L 468.45954 257.55915 L 409.74665 198.84626 L 409.74665 109.97321 L 320.8736 109.97321 L 262.54743 51.647036 z "     transform="translate(-6.8599269,-2.8599269)" /></svg>';
let  SvgMixedSquare_X100 = '<svg   width="100"   height="100"   viewBox="0 0 512 512"   version="1.1"   id="svg1"   inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"   sodipodi:docname="MixedSquareItemButtonLightBorder.svg"   inkscape:export-filename="RotatedSquareItemButtonLightBorder.png"   inkscape:export-xdpi="96"   inkscape:export-ydpi="96"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <sodipodi:namedview     id="namedview1"     pagecolor="#ffffff"     bordercolor="#000000"     borderopacity="0.25"     inkscape:showpageshadow="2"     inkscape:pageopacity="0.0"     inkscape:pagecheckerboard="0"     inkscape:deskcolor="#d1d1d1"     inkscape:document-units="px"     inkscape:zoom="1.6035156"     inkscape:cx="255.68819"     inkscape:cy="255.37637"     inkscape:window-width="1920"     inkscape:window-height="1017"     inkscape:window-x="-8"     inkscape:window-y="-8"     inkscape:window-maximized="1"     inkscape:current-layer="svg1" />  <defs     id="defs1" />  <g     inkscape:label="Слой 1"     inkscape:groupmode="layer"     id="layer1"     style="display:none">    <circle       style="fill:none;stroke:#000000;stroke-width:1;stroke-dasharray:none;stroke-opacity:1"       id="path1"       cx="256"       cy="256"       r="256" />    <rect       style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:4.57746;stroke-dasharray:none;stroke-opacity:1"       id="rect1"       width="320.42255"       height="320.42255"       x="93.333183"       y="98.321846"       sodipodi:insensitive="true" />    <ellipse       style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path2"       cx="253.19366"       cy="258.80634"       rx="156.53107"       ry="157.15469"       sodipodi:insensitive="true" />    <path       sodipodi:type="star"       style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path3"       inkscape:flatsided="true"       sodipodi:sides="3"       sodipodi:cx="255.68819"       sodipodi:cy="254.44093"       sodipodi:r1="244.98727"       sodipodi:r2="122.49364"       sodipodi:arg1="0.52359878"       sodipodi:arg2="1.5707963"       inkscape:rounded="0"       inkscape:randomized="0"       d="m 467.85339,376.93457 -424.330407,0 L 255.68819,9.4536591 Z"       inkscape:transform-center-y="-59.482564"       transform="matrix(0.97119431,0,0,0.97119431,7.9889041,29.015136)" />    <path       sodipodi:type="star"       style="fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path4"       inkscape:flatsided="true"       sodipodi:sides="4"       sodipodi:cx="262.5481"       sodipodi:cy="257.55908"       sodipodi:r1="205.91211"       sodipodi:r2="145.60185"       sodipodi:arg1="0"       sodipodi:arg2="0.78539816"       inkscape:rounded="0"       inkscape:randomized="0"       d="M 468.46021,257.55908 262.5481,463.47119 56.635986,257.55908 262.5481,51.646973 Z"       transform="translate(-6.8599269,-2.8599269)" />    <rect       style="fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:4.57746;stroke-dasharray:none;stroke-opacity:1"       id="rect1-5"       width="320.42255"       height="320.42255"       x="93.333183"       y="98.321846" />  </g>  <path     sodipodi:type="star"     style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"     id="path5"     inkscape:flatsided="true"     sodipodi:sides="4"     sodipodi:cx="262.5481"     sodipodi:cy="257.55908"     sodipodi:r1="205.91211"     sodipodi:r2="145.60185"     sodipodi:arg1="0"     sodipodi:arg2="0.78539816"     inkscape:rounded="0"     inkscape:randomized="0"     d="M 468.46021,257.55908 262.5481,463.47119 56.635986,257.55908 262.5481,51.646973 Z"     transform="translate(-6.8599269,-2.8599269)"     sodipodi:insensitive="true" />  <rect     style="display:none;fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:4.22535;stroke-dasharray:none;stroke-opacity:1"     id="rect5"     width="295.77466"     height="295.77466"     x="107.11267"     y="107.11268"     sodipodi:insensitive="true" />  <path     id="path6"     style="fill:#173746;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"     d="M 262.54743 51.647036 L 204.22126 109.97321 L 113.97321 109.97321 L 113.97321 200.22126 L 56.635318 257.55915 L 113.97321 314.89704 L 113.97321 405.74665 L 204.82282 405.74665 L 262.54743 463.47126 L 320.27204 405.74665 L 409.74665 405.74665 L 409.74665 316.27204 L 468.45954 257.55915 L 409.74665 198.84626 L 409.74665 109.97321 L 320.8736 109.97321 L 262.54743 51.647036 z "     transform="translate(-6.8599269,-2.8599269)" /></svg>';

let SvgWidthValue = 120;// for custom size of svg item. Defaul: 175
let SvgColorValue = "#cccccc"//'#ff0000';// for custom size of svg item. Defaul: 100
let SvgBorderColorValue = NewColor;//'#ff0000';// for custom size of svg item. Defaul: 100
let SvgOpacity = 0.65;// for custom size of svg item. Defaul: 100
///default SvgImage Atributes value:
let SvgMixedSquare_Custom = '<svg   width="' + SvgWidthValue + '"   height=" ' + SvgWidthValue + ' "   viewBox="0 0 512 512"   version="1.1"   id="svgMixedSquare"   inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"   sodipodi:docname="MixedSquareItemButtonLightBorder.svg"   inkscape:export-filename="RotatedSquareItemButtonLightBorder.png"   inkscape:export-xdpi="96"   inkscape:export-ydpi="96"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs1" />  <g     inkscape:label="Слой 1"     inkscape:groupmode="layer"     id="layer1"     style="display:none">    <path       sodipodi:type="star"       style="fill:#5522FF;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path4"       inkscape:flatsided="true"       sodipodi:sides="4"       sodipodi:cx="262.5481"       sodipodi:cy="257.55908"       sodipodi:r1="205.91211"       sodipodi:r2="145.60185"       sodipodi:arg1="0"       sodipodi:arg2="0.78539816"       inkscape:rounded="0"       inkscape:randomized="0"       d="M 468.46021,257.55908 262.5481,463.47119 56.635986,257.55908 262.5481,51.646973 Z"       transform="translate(-6.8599269,-2.8599269)" />    <rect       style="fill:#008800;fill-opacity:1;stroke:#ffffff;stroke-width:4.57746;stroke-dasharray:none;stroke-opacity:1"       id="rect1-5"       width="320.42255"       height="320.42255"       x="93.333183"       y="98.321846" />  </g>  <path     id="path6"     style="fill:'+ SvgColorValue +';fill-opacity:'+ SvgOpacity +';stroke:'+ SvgBorderColorValue +';stroke-width:5;stroke-dasharray:none;stroke-opacity:1"     d="M 262.54743 51.647036 L 204.22126 109.97321 L 113.97321 109.97321 L 113.97321 200.22126 L 56.635318 257.55915 L 113.97321 314.89704 L 113.97321 405.74665 L 204.82282 405.74665 L 262.54743 463.47126 L 320.27204 405.74665 L 409.74665 405.74665 L 409.74665 316.27204 L 468.45954 257.55915 L 409.74665 198.84626 L 409.74665 109.97321 L 320.8736 109.97321 L 262.54743 51.647036 z "     transform="translate(-6.8599269,-2.8599269)" /></svg>';


///mixedSquare default svg:
//<svg   width="512"   height="512"   viewBox="0 0 512 512"   version="1.1"   id="svgMixedSquare"   inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"   sodipodi:docname="MixedSquareItemButtonLightBorder.svg"   inkscape:export-filename="RotatedSquareItemButtonLightBorder.png"   inkscape:export-xdpi="96"   inkscape:export-ydpi="96"   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"   xmlns="http://www.w3.org/2000/svg"   xmlns:svg="http://www.w3.org/2000/svg">  <defs     id="defs1" />  <g     inkscape:label="Слой 1"     inkscape:groupmode="layer"     id="layer1"     style="display:none">    <path       sodipodi:type="star"       style="fill:#5522FF;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"       id="path4"       inkscape:flatsided="true"       sodipodi:sides="4"       sodipodi:cx="262.5481"       sodipodi:cy="257.55908"       sodipodi:r1="205.91211"       sodipodi:r2="145.60185"       sodipodi:arg1="0"       sodipodi:arg2="0.78539816"       inkscape:rounded="0"       inkscape:randomized="0"       d="M 468.46021,257.55908 262.5481,463.47119 56.635986,257.55908 262.5481,51.646973 Z"       transform="translate(-6.8599269,-2.8599269)" />    <rect       style="fill:#5522FF;fill-opacity:1;stroke:#ffffff;stroke-width:4.57746;stroke-dasharray:none;stroke-opacity:1"       id="rect1-5"       width="320.42255"       height="320.42255"       x="93.333183"       y="98.321846" />  </g>  <path     id="path6"     style="fill:#002211;fill-opacity:1;stroke:#ffffff;stroke-width:5;stroke-dasharray:none;stroke-opacity:1"     d="M 262.54743 51.647036 L 204.22126 109.97321 L 113.97321 109.97321 L 113.97321 200.22126 L 56.635318 257.55915 L 113.97321 314.89704 L 113.97321 405.74665 L 204.82282 405.74665 L 262.54743 463.47126 L 320.27204 405.74665 L 409.74665 405.74665 L 409.74665 316.27204 L 468.45954 257.55915 L 409.74665 198.84626 L 409.74665 109.97321 L 320.8736 109.97321 L 262.54743 51.647036 z "     transform="translate(-6.8599269,-2.8599269)" /></svg>
