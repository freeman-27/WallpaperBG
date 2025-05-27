function SwitchBtnArrow(par = 0){
    let Panel_1 = document.getElementById("left");
    let Panel_2 = document.getElementById("right");
    let Panel_3 = document.getElementById("bottomPanel");
    let Btn_1 = document.getElementById("OpenLeftPan");
    let Btn_2 = document.getElementById("OpenRightPan");
    let Btn_3 = document.getElementById("OpenBottomPan");
    let ItemState1 = Panel_1.getAttribute("panel-state");
    let ItemState2 = Panel_2.getAttribute("panel-state");
    let ItemState3 = Panel_3.getAttribute("panel-state");

    ///Display left panel:
    if(ItemState1 === "closed" && par === 1){
        document.getElementById("left").setAttribute("panel-state", "opened");
        ItemState1=Panel_1.getAttribute("panel-state");
        console.log("Left panel:", ItemState1);
        Btn_1.classList.toggle("arrowLeft");
        Btn_1.classList.toggle("arrowRight");
    }
    // if(ItemState1 === "opened"){
    else if(par === 1){
    // else{
        document.getElementById("left").setAttribute("panel-state", "closed");
        ItemState1=Panel_1.getAttribute("panel-state");
        console.log("Left panel:", ItemState1);
        Btn_1.classList.toggle("arrowLeft");
        Btn_1.classList.toggle("arrowRight");
    }

    ///Display Right panel:
    if(ItemState2 === "closed" && par === 2){
        document.getElementById("right").setAttribute("panel-state", "opened");
        ItemState2=Panel_2.getAttribute("panel-state");
        console.log("Right panel:", ItemState2);
        Btn_2.classList.toggle("arrowLeft");
        Btn_2.classList.toggle("arrowRight");
    }
    // if(ItemState2 === "opened"){
    else if(par === 2){
    // else{
        document.getElementById("right").setAttribute("panel-state", "closed");
        ItemState2=Panel_2.getAttribute("panel-state");
        console.log("Right panel:", ItemState2);
        Btn_2.classList.toggle("arrowLeft");
        Btn_2.classList.toggle("arrowRight");
    }

    //Display bottom panel:
    if(ItemState3 === "closed" && par === 3){
        document.getElementById("bottomPanel").setAttribute("panel-state", "opened");
        ItemState3=Panel_3.getAttribute("panel-state");
        console.log("Bottom panel:", ItemState3);
        Btn_3.classList.toggle("arrowTop");
        Btn_3.classList.toggle("arrowBottom");
    }
    // if (ItemState3 === "opened"){
    else if(par === 3){
    // else{
        document.getElementById("bottomPanel").setAttribute("panel-state", "closed");
        ItemState3=Panel_3.getAttribute("panel-state");
        console.log("Bottom panel:", ItemState3);
        Btn_3.classList.toggle("arrowTop");
        Btn_3.classList.toggle("arrowBottom");
    }
}
function SwitchDisplaingPanel(){

}

function ReloadApp(){
    window.alert("App will be reload");
    window.open("index.html", "_self")
}