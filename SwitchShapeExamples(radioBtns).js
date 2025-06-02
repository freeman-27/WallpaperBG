function SwitchShape_RadioBtn(Shape){
    // let inputElementShapeAttr = document.getElementById('ShapesList').children[index].firstChild; //////////////////////
    // let GetShapeType = inputElementShapeAttr.getAttribute("shape-type");     /////////////
    // let ShapeType = GetShapeType;
    // let ShapeType;
    // let circle;
    // let triangle;
    // let square;
    // let rotatedSquare = 'rotatedSquare';

    let mixedItem;
    let NewColorOfPreview = "Background-color:" + NewColor + ";";
    let NewColorOfTriangle = "border-left: 25px solid transparent !important; border-right: 25px solid transparent !important; border-bottom: 50px solid " + NewColor + "!important; ";
    
    let ReplacingTypeShapeElement = document.getElementById("imageShapePrevContainer-02").children[0];
    switch (Shape) {
        case 1:
            // window.alert('no shape selected');
            // console.log("SwitchShape(): no shape selected");
            let EmptyTypeOfShape = document.createElement('span');
            EmptyTypeOfShape.innerText = "Select one type of shape";
            EmptyTypeOfShape.setAttribute("style", "text-align: center; color: white;")
            document.getElementById('imageShapePrevContainer-02').replaceChild(EmptyTypeOfShape, ReplacingTypeShapeElement);
            break;
        case 2:
        // case ShapeType === circle:
            circleItem = document.createElement('div');
            circleItem.setAttribute("style", circleItemStyleAttr + NewColorOfPreview);
            document.getElementById('imageShapePrevContainer-02').replaceChild(circleItem, ReplacingTypeShapeElement);
            console.log("circleAdded");
            break;
        case 3:
        // case ShapeType ===  square:
            squareItem = document.createElement('div');
            squareItem.setAttribute("style", squareItemStyleAttr + NewColorOfPreview);
            document.getElementById('imageShapePrevContainer-02').replaceChild(squareItem, ReplacingTypeShapeElement);
            console.log("square Added");
            break;
        case 4:
        // case ShapeType === rotatedSquare:
            rotatedSquareItem = document.createElement('div');
            rotatedSquareItem.setAttribute("style", rotatedSquareItemStyleAttr + NewColorOfPreview);
            document.getElementById('imageShapePrevContainer-02').replaceChild(rotatedSquareItem, ReplacingTypeShapeElement);
            console.log("rotatedSquare Added");
            break;
        case 5:
            // case ShapeType === mixedSquare:
            // mixedSquareItem = document.createElement('div');
            // mixedSquareItem.setAttribute("style", mixedSquareItemStyleAttr + NewColorOfPreview);
            squareItem = document.createElement('div');
            squareItem.setAttribute("style", squareItemStyleAttr + NewColorOfPreview);
            rotatedSquareItem = document.createElement('div');
            rotatedSquareItem.setAttribute("style", rotatedSquareItemStyleAttr + NewColorOfPreview + "position: relative; top: -50px;");
            mixedItem = document.createElement('div');
            mixedItem.setAttribute('style', "block-size: 50px;")
            mixedItem.appendChild(squareItem);
            mixedItem.appendChild(rotatedSquareItem);
            document.getElementById('imageShapePrevContainer-02').replaceChild(mixedItem , ReplacingTypeShapeElement);
            // document.getElementById('imageShapePrevContainer-02').replaceChild(mixedSquareItem, ReplacingTypeShapeElement);
            console.log("mixedSquare Added");
            // TypeOfShape = document.getElementById("radio-input-MixedSquare").getAttribute("shape-type");
            break;
        case 6:
        // case ShapeType === triangle:
            triangleItem = document.createElement('div');
            triangleItem.setAttribute("style", triangleItemStyleAttr);
            document.getElementById('imageShapePrevContainer-02').replaceChild(triangleItem, ReplacingTypeShapeElement);
            console.log("triangle Added");
            break;
        case 7:
        // case ShapeType === H-line:
            h_lineItem = document.createElement('div');
            h_lineItem.setAttribute("style", h_lineItemStyleAttr + NewColorOfPreview);
            document.getElementById('imageShapePrevContainer-02').replaceChild(h_lineItem, ReplacingTypeShapeElement);
            console.log("H-line Added");
            break;
        case 8:
        // case ShapeType === V-line:
            v_lineItem = document.createElement('div');
            v_lineItem.setAttribute("style", v_lineItemStyleAttr + NewColorOfPreview);
            document.getElementById('imageShapePrevContainer-02').replaceChild(v_lineItem, ReplacingTypeShapeElement);
            console.log("H-line Added");
            break;
        case 9:
        // case ShapeType === LeftAngleLine:
            LeftAngleLineItem = document.createElement('div');
            LeftAngleLineItem.setAttribute("style", LeftAngleLineItemStyleAttr + NewColorOfPreview);
            document.getElementById('imageShapePrevContainer-02').replaceChild(LeftAngleLineItem, ReplacingTypeShapeElement);
            console.log("LeftAngleLine Added");
            break;
        case 10:
        // case ShapeType === RightAngleLineItem:
            RightAngleLineItem = document.createElement('div');
            RightAngleLineItem.setAttribute("style", RightAngleLineItemStyleAttr + NewColorOfPreview);
            document.getElementById('imageShapePrevContainer-02').replaceChild(RightAngleLineItem, ReplacingTypeShapeElement);
            console.log("RightAngleLine Added");
            break;
        default:
            // window.alert('no shape selected');
            // console.log("rotatedSquare Added");
            break;
    }
}
