// let GetColorFromPick;
let CurrentTextStyle
let CurrentHeaderStyle
function SetTextColor(){
    let OutputTextElement = document.getElementById("DrawingTextOutput");
    GetColorFromPick = savedColor;
    CurrentTextStyle = OutputTextElement.getAttribute("style");
    OutputTextElement.setAttribute("style", CurrentTextStyle + "color:" + savedColor + ";");
}
function SetHeaderColor(){
    let OutputTextElement = document.getElementById("DrawingHeaderOutput");
    GetColorFromPick = savedColor;
    CurrentTextStyle = OutputTextElement.getAttribute("style");
    OutputTextElement.setAttribute("style", CurrentTextStyle + "color:" + savedColor + ";");
}