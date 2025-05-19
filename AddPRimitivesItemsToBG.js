//primitives
let circleItem;
let circleItemStyleAttr = "height: 50px; width: 50px; background-color: #555; border-radius: 50%; position: relative; z-index: 5550005;";

let triangleItem;
let triangleItemStyleAttr = "width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 50px solid #555;";

let squareItem;
let squareItemStyleAttr = "height: 50px; width: 50px; background-color: #555;";

let rotatedSquareItem;
let rotatedSquareItemStyleAttr = "height: 50px; width: 50px; background-color: #555; rotate: 45deg;";

let h_lineItem;
let v_lineItem;


let SavedItem1;
let itemType;

function DisplaySelectedItem(){
    itemPreset1 = document.getElementById('circleShapeItem').getAttribute("itemType");
    itemPreset2 = document.getElementById('triangleShapeItem').getAttribute("itemType");
    itemPreset3 = document.getElementById('rotatedSquareShapeItem').getAttribute("itemType");
    let typePreset;
    if(typePreset = itemPreset1.get){

    }
}

function GetSavedItems(){
    document.getElementById('circleShapeItem');
    document.getElementById('triangleShapeItem');
    document.getElementById('rotatedSquareShapeItem');
    // if(){

    // }
}


let OutputContainer;
function AddPrimitives(){
    OutputContainer = document.getElementById("imageOutputContainer");

    circleItem = document.createElement('div');
    circleItem.setAttribute("style", circleItemStyleAttr);
    triangleItem = document.createElement('div');
    triangleItem.setAttribute("style", triangleItemStyleAttr);
    squareItem = document.createElement('div');
    squareItem.setAttribute("style", squareItemStyleAttr);
    rotatedSquareItem = document.createElement('div');
    rotatedSquareItem.setAttribute("style", rotatedSquareItemStyleAttr);

    if (itemType === "type1"){
        SavedItem1 = circleItem;
        OutputContainer.appendChild(SavedItem1);
    }
    if (itemType === "type2"){
        SavedItem1 = triangle;
        OutputContainer.appendChild(SavedItem1);
    }
    if (itemType === "type4"){
        SavedItem1 = rotatedSquareItem;
        OutputContainer.appendChild(SavedItem1);
    }

    // switch (key) {
    //     case value:
    //         SavedItem1 = circleItem;
    //         break;
    
    //     default: 
    //         break;
    // }
    OutputContainer.appendChild(circleItem);
    OutputContainer.appendChild(triangleItem);
    OutputContainer.appendChild(rotatedSquareItem);
    OutputContainer.appendChild(squareItem);
    OutputContainer.appendChild(SavedItem1);
}