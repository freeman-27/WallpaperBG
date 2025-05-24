let defaultStyleAttr = "overflow: hidden; position: relative; left: 12.5%; width: 75%; block-size: 400px;"
let customStyleAttr = "overflow: hidden; position: relative; left: 12.5%; width: 75%; block-size: 400px;"
// let customBG_1 = "img/BackgroundsTemplates/forBlurBackground_sized_Green.png";
// let  img0,img1,img2,img3,img4
const BackgroundImages = []
BackgroundImages[0] = "img/BackgroundsTemplates/forBlurBackground_sized_Blue.png";
BackgroundImages[1] = "img/BackgroundsTemplates/forBlurBackground_sized_Violet.png";
BackgroundImages[2] = "img/BackgroundsTemplates/forBlurBackground_sized_Aqua.png";
BackgroundImages[3] = "img/BackgroundsTemplates/forBlurBackground_sized_Green.png";
BackgroundImages[4] = "img/BackgroundsTemplates/forBlurBackground_sized_Yellow.png";
BackgroundImages[5] = "img/BackgroundsTemplates/forBlurBackground_sized_lightViolet.png";
BackgroundImages[6] = "img/BackgroundsTemplates/forBlurBackground_sized_lightPink.png";
BackgroundImages[7] = "img/BackgroundsTemplates/forBlurBackground_sized_lightGray.png";
BackgroundImages[8] = "img/BackgroundsTemplates/forBlurBackground_sized_DarkGray.png";
BackgroundImages[9] = "empty";
BackgroundImages[10] = "img/BackgroundsTemplates/forBlurBackground_sized_Cobalt.png";

let index = 0;
function BackgroundMeshGradientImagePreset(){

    customStyleAttr = "overflow: hidden; position: relative; left: 2.5%; width: 95%; block-size: 400px; background-image:url('"+ BackgroundImages[index] +"'); background-size: cover;"
    document.getElementById("imageOutputContainer").setAttribute("style", customStyleAttr);
    // if (index === 0){index = 1};
    index++;
    if(index > 10){
        index = 0;
    }
}