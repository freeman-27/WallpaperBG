function RoundedBorderOfImage(){
    // OutputContainer.classList.add("rounded-4");
    document.getElementById("imageOutputContainer").classList.toggle("rounded-5");
}
function AddCustomImage(){
    // OutputContainer.classList.add("rounded-4");
    // document.getElementById("imageOutputContainer");
    // window.open(localStorage);
    // localStorage.setItem();
    let FilePathAndName;
    FilePathAndName = document.getElementById("inputImageFile").getAttribute("value");
    let defaultStyleProperties = "overflow: hidden; position: relative; left: 12.5%; width: 75%; block-size: 400px;";
    let customStyleProperties = "overflow: hidden; position: relative; left: 2.5%; width: 95%; block-size: 400px; background-image:url('"+ FilePathAndName +"'); background-size: cover;"
    document.getElementById("imageOutputContainer").setAttribute("style", customStyleProperties);

    document.getElementById("BtnSetCustomBackgroundImage").classList.add("btn-dark");
    document.getElementById("BtnSetCustomBackgroundImage").classList.remove("btn-success");
    document.getElementById("BtnSetCustomBackgroundImage").setAttribute("style", "outline: 0px dotted white");

    if(FilePathAndName === null){
        window.alert("No image file uploaded, select some file with image adnd upload it to program.");
    }
}

function LoadToLocalStorage(){

}