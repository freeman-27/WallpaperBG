///TODO
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