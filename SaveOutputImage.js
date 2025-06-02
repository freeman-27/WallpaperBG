///Save HTML element to image using html2canvas lib
document.getElementById("MainButton").addEventListener("click", function() {
    // Код для сохранения фрагмента HTML-страницы в виде изображения
    html2canvas(document.querySelector("#imageOutputContainer")).then(canvas => {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "filename.png";
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
    });
  });