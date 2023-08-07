document.addEventListener("DOMContentLoaded", function() {
    const btnTopo = document.getElementById("btnTopo");
    
    btnTopo.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  