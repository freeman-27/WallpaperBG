let SetItem 
let ItemStyleProperties
// let OutputContainer

//primitives
circleItem;
circleItemStyleAttr = "height: 50px; width: 50px; background-color: #555; border-radius: 50%; position: relative; z-index: 5550005;";
triangleItem;
triangleItemStyleAttr = "width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 50px solid rgb(0, 0, 250);";
squareItem;
squareItemStyleAttr = "height: 50px; width: 50px; background-color: #555;";
rotatedSquareItem;
rotatedSquareItemStyleAttr = "height: 50px; width: 50px; background-color: #555; rotate: 45deg;";
mixedSquareItem;
mixedSquareItemStyleAttr = "height: 50px; width: 50px; background-color: #ff55aa; rotate: 0deg;";
h_lineItem;
v_lineItem;

//properties of primitives:
let Size
let Color
let Opacity

let DefaultSize
let DefColor
let DefOpacity 
let defaultProperties


let SetColorValue

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

    return ItemStyleProperties;
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

    return ItemStyleProperties;
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
    return ItemStyleProperties;
}
///type 5
function SetMixedSquareShapeItem(){
    SetItem = document.createElement('div');
    defaultProperties = mixedSquareItemStyleAttr;
    if (ModifiedColor === null){SetColorValue = "#888aaa"};
    SetColorValue = ModifiedColor;
    Size = "scale: 2.0; ";
    Color = "background-color: " + SetColorValue + "; ";
    Opacity = "opacity: 0.55; ";
    ItemStyleProperties = defaultProperties + Size + Color + Opacity;
    document.getElementById('ConfirmShapeSettings').removeAttribute("disabled");
    return ItemStyleProperties;
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
    return ItemStyleProperties;
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
    return ItemStyleProperties;
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
    return ItemStyleProperties;
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
    return ItemStyleProperties;
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
    return ItemStyleProperties;
}




//////////////////////////////////////////////////////////////
///Group of functions for items with all types of shapes
///Functions setting numbers, color, opacity, size(scale), random position and adding items to image
///SetNumbersOfItems(), ReturnColor(), SaveItemProperties(), SetRandomPosition(), AddItemToImage(), Add_10_itemsToimage()
let ModifiedSettings = " "
let ModifiedColor = " "
///
function SaveItemProperties(){
    SetItem.setAttribute("style", ItemStyleProperties);
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
    return ModifiedSettings, ModifiedColor;
}




function AddItemToImage(){
    let AddToOutputContainer = document.getElementById("imageOutputContainer");
    SetRandomPosition();
    SetItem = document.createElement('div');
    SetItem.setAttribute("style", ItemStyleProperties + RandomPlacement + ModifiedSettings);
    // AddToOutputContainer.appendChild(SetItem);
    document.getElementById("imageOutputContainer").appendChild(SetItem);
    document.getElementById('ConfirmShapeSettings').setAttribute("disabled", " ");
}

let NumberOfItems = 10;
//default NumberOfItems = 10
// maximum value: 100
function Add_10_itemsToimage(){
    let i = 1;
    do {
        AddItemToImage();
        i++;
    } while (i < NumberOfItems);
}