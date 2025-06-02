function resetImage(){
    //OutputContainer//.replaceChildren('div');
    let ClearContent = document.createElement('div');
    document.getElementById("imageOutputContainer").replaceChildren(ClearContent);
    ClearContent.innerHTML = '<!-- main output container --><div id="DrawingTextContainer" class="" style="width:100%; block-size: 100%; border: 0px dashed red; position: relative; z-index: 5777705 !important;"><p id="DrawingHeaderOutput" class="display-3 fw-bold mt-5" style="position: relative; align-self: start;"><!--Header content--></p><p id="DrawingTextOutput" class="fs-3 fw-bold" style="position: relative; top:35%;"><!--text line content--></p></div>';
}