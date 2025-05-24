// let GetColorFromPick;
function SetStaticColor(){
    
    OutputContainer = document.getElementById("imageOutputContainer");
    GetColorFromPick = savedColor;

    // customStyleAttr = "overflow: hidden; position: relative; left: 12.5%; width: 75%; block-size: 400px; background-color: "+ GetColorFromPick + "!important;";
    customStyleAttr = "overflow: hidden; position: relative; left: 12.5%; width: 75%; block-size: 400px; background-image: none; background-color: "+ GetColorFromPick + ";";
    OutputContainer.setAttribute("style", customStyleAttr);
}