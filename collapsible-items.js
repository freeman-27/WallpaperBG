var coll = document.getElementsByClassName("collapsingButton");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    //   content.style.display = "none";
    content.classList.toggle("d-none");
    } else {
    //   content.style.display = "block";
      content.classList.toggle("d-none");
    }
  });
}




//////Left Hide
var LeftPanel = document.getElementById("left");

    this.addEventListener("click", function(){
        LeftPanel.classList.toggle("CollapseWidth");
    })