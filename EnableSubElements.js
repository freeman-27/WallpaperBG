function enableNumbers(){
    document.getElementById("NumbersOfItemsInput").toggleAttribute("disabled");
}
function enableScale(){
    document.getElementById("ScaleOfItemsInput").toggleAttribute("disabled");
}
function enableColor(){
    document.getElementById("ColorOfItemsInput").toggleAttribute("disabled");
}
function enableOpacity(){
    document.getElementById("OpacityOfItemsInput").toggleAttribute("disabled");
}


let scaleValueOnInput;
var IntervalForInputScale;
function ChangeScaleValueOnInput(){
    // scaleValueOnInput +=1; 
    IntervalForInputScale = setInterval(function (){
        Resendalue();
    },10
    )
    
    function Resendalue(){
        scaleValueOnInput = document.getElementById("ScaleOfItemsInput").getAttribute("value");
        let ModifyValue = scaleValueOnInput.toString() + "0.01";
        document.getElementById("ScaleNumbersOutput").innerText = ModifyValue;
    }
}
let FilePathAndName;
function EnableAddCustomImage(){//on modal window
    // document.getElementById('SetCustomImageBtn').removeAttribute("disabled");
    document.getElementById('LoadCustomImageBtn').removeAttribute("disabled");
    document.getElementById('SaveCustomImageBtn').removeAttribute("disabled");
}


/// functions for addimg image file to local source for app's web-page
function UploadImgFile(){
    /// FileObject (Array with properties)
    // let FileObject = {
    //     name : "",
    //     url: ""
    // }
    // FileObject.url
}
function LoadFileToLocalStorage(){
    FilePathAndName = document.getElementById("inputImageFile").getAttribute("value");
    console.log("selected file:", FilePathAndName);
    localStorage.setItem("image", FilePathAndName);
    document.getElementById("BtnSetCustomBackgroundImage").classList.remove("btn-dark");
    document.getElementById("BtnSetCustomBackgroundImage").classList.add("btn-success");
    document.getElementById("BtnSetCustomBackgroundImage").setAttribute("style", "outline: 4px dotted white");
}
function DisableAddCustomImage(){//on modal window
    // document.getElementById('SetCustomImageBtn').setAttribute("disabled", " ");
    document.getElementById('LoadCustomImageBtn').setAttribute("disabled", " ");
    document.getElementById('SaveCustomImageBtn').setAttribute("disabled", " ");
}