
//<script>
function AddHeaderToImage(){

   //output to container
  document.getElementById("DrawingHeaderOutput").innerText = document.getElementById("inputHeaderOnImageTextArea").value;
  // document.getElementById("DrawingTextOutput").setAttribute("style", "z-index: 777705");

//   let V2 = document.getElementById("inputTextOnImageTextArea").value;
//   alert(V2);

}
function AddTextToImage(){

   //output to container
  document.getElementById("DrawingTextOutput").innerText = document.getElementById("inputTextOnImageTextArea").value;
  // document.getElementById("DrawingTextOutput").setAttribute("style", "z-index: 777705");

//   let V2 = document.getElementById("inputTextOnImageTextArea").value;
//   alert(V2);

}
//</script>

function AddShadowOfHeader(){
  document.getElementById("DrawingHeaderOutput").classList.toggle("ShadowTextLight");
}
function AddShadowOfText(){
  document.getElementById("DrawingTextOutput").classList.toggle("ShadowTextLight");
}