function showPreviewShape(Type = 0){
    // let ReplacingTypeShapeElement = document.getElementById("outputShapeExample");
    let ReplacingTypeShapeElement = document.getElementById("imageShapePrevContainer-01").children[0];
    if(Type === 1){
        // UncheckAllTypes();
        circleItem = document.createElement('div');
        circleItem.setAttribute("style", circleItemStyleAttr + "scale: 0.5;");
        document.getElementById('imageShapePrevContainer-01').appendChild(circleItem);
        console.log("circle Selected");
    }if(Type === 2){
        triangleItem = document.createElement('div');
        triangleItem.setAttribute("style", triangleItemStyleAttr + "scale: 0.5;");
        document.getElementById('imageShapePrevContainer-01').appendChild(triangleItem);
        console.log("triangle Selected");
    }if(Type === 3){
        squareItem = document.createElement('div');
        squareItem.setAttribute("style", squareItemStyleAttr + "scale: 0.5;");
        document.getElementById('imageShapePrevContainer-01').appendChild(squareItem);
        console.log("square Selected");
    }if(Type === 4){
        rotatedSquareItem = document.createElement('div');
        rotatedSquareItem.setAttribute("style", rotatedSquareItemStyleAttr + "scale: 0.5;");
        document.getElementById('imageShapePrevContainer-01').appendChild(rotatedSquareItem);
        console.log("rotatedSquare Selected");
    }
}


////// pev. ver.
// function showPreviewShape(Type = 0){
//     // let ReplacingTypeShapeElement = document.getElementById("outputShapeExample");
//     let ReplacingTypeShapeElement = document.getElementById("imageShapePrevContainer").children[0];
//     if(Type === 1){
//         // UncheckAllTypes();
//         circleItem = document.createElement('div');
//         circleItem.setAttribute("style", circleItemStyleAttr + "border: 2px solid black; scale: 2.0;");
//         document.getElementById('imageShapePrevContainer').replaceChild(circleItem, ReplacingTypeShapeElement);
//         console.log("circle Selected");
//     }if(Type === 2){
//         triangleItem = document.createElement('div');
//         triangleItem.setAttribute("style", triangleItemStyleAttr + "scale: 2.0;");
//         document.getElementById('imageShapePrevContainer').replaceChild(triangleItem, ReplacingTypeShapeElement);
//         console.log("triangle Selected");
//     }if(Type === 3){
//         squareItem = document.createElement('div');
//         squareItem.setAttribute("style", squareItemStyleAttr + "border: 2px solid black; scale: 2.0;");
//         document.getElementById('imageShapePrevContainer').replaceChild(squareItem, ReplacingTypeShapeElement);
//         console.log("square Selected");
//     }if(Type === 4){
//         rotatedSquareItem = document.createElement('div');
//         rotatedSquareItem.setAttribute("style", rotatedSquareItemStyleAttr + "border: 2px solid black; scale: 2.0;");
//         document.getElementById('imageShapePrevContainer').replaceChild(rotatedSquareItem, ReplacingTypeShapeElement);
//         console.log("rotatedSquare Selected");
//     }
// }

