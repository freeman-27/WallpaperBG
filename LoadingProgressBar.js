//<script>
setTimeout(function (){
    
    var i = 0;
    function ShowLoadingProgress() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progressBar_line");
        var width = 1;
        var id = setInterval(incrWidth, 50);
        function incrWidth() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
            document.body.classList.replace("loadingBgColorDark", "bg-dark");
            // document.body.classList.replace("RandomColor", "bg-dark");
            document.getElementById("spinContainer").classList.remove("d-none");
            document.getElementById("ProgressBarContainer").classList.add("d-none");
            document.getElementById("ProgressLoadingContainer").children[1].classList.add("d-none");
            setInterval(function(){
                ShowApplication();
            }, 3000);
        } else {
            width++;
            elem.style.width = width + "%";
            document.body.classList.add("loadingBgColorDark");
            // document.body.classList.add("RandomColor");
            document.body.setAttribute("style", "cursor: progress;");
        }
        }
    }
    }

    ShowLoadingProgress();
}, 1000);

function ShowApplication(){
    document.getElementById("MainContainer").classList.remove("d-none");
    document.getElementById("ProgressLoadingContainer").classList.add("d-none");
    document.body.setAttribute("style", "cursor: default;");
}
//</script>