function SwitchShape_RadioBtn(Shape){
    // let inputElementShapeAttr = document.getElementById('ShapesList').children[index].firstChild; //////////////////////
    // let GetShapeType = inputElementShapeAttr.getAttribute("shape-type");     /////////////
    // let ShapeType = GetShapeType;
    // let ShapeType;
    // let circle;
    // let triangle;
    // let square;
    // let rotatedSquare = 'rotatedSquare';
    
    let ReplacingTypeShapeElement = document.getElementById("imageShapePrevContainer-02").children[0];
    switch (Shape) {
        case 1:
        // case ShapeType === circle:
            circleItem = document.createElement('div');
            circleItem.setAttribute("style", circleItemStyleAttr);
            document.getElementById('imageShapePrevContainer-02').replaceChild(circleItem, ReplacingTypeShapeElement);
            console.log("circleAdded");
            break;
        case 2:
        // case ShapeType === triangle:
            triangleItem = document.createElement('div');
            triangleItem.setAttribute("style", triangleItemStyleAttr);
            document.getElementById('imageShapePrevContainer-02').replaceChild(triangleItem, ReplacingTypeShapeElement);
            console.log("triangle Added");
            break;
        case 3:
        // case ShapeType ===  square:
            squareItem = document.createElement('div');
            squareItem.setAttribute("style", squareItemStyleAttr);
            document.getElementById('imageShapePrevContainer-02').replaceChild(squareItem, ReplacingTypeShapeElement);
            console.log("square Added");
            break;
        case 4:
        // case ShapeType === rotatedSquare:
            rotatedSquareItem = document.createElement('div');
            rotatedSquareItem.setAttribute("style", rotatedSquareItemStyleAttr);
            document.getElementById('imageShapePrevContainer-02').replaceChild(rotatedSquareItem, ReplacingTypeShapeElement);
            console.log("rotatedSquare Added");
            break;
        case 5:
            window.alert('no shape selected');
            console.log("SwitchShape(): no shape selected");
            break;
        default:
            // window.alert('no shape selected');
            // console.log("rotatedSquare Added");
            break;
    }
}
