document.addEventListener("DOMContentLoaded", function() {
    const btnTopo = document.getElementById("btnTopo");
    
    btnTopo.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });


// linha do tempo 

document.getElementById("frontEndBtn").addEventListener("click", function () {
  filterCursos("Front-end");
});

document.getElementById("backEndBtn").addEventListener("click", function () {
  filterCursos("Back-end");
});

document.getElementById("desenvolvimentoPessoalBtn").addEventListener("click", function () {
  filterCursos("Desenvolvimento Pessoal");
});

document.getElementById("empreendedorismoBtn").addEventListener("click", function () {
  filterCursos("Empreendedorismo");
});



// Função para filtrar os cursos
function filterCursos(categoria) {
  const cursos = document.querySelectorAll(".curso");
  cursos.forEach((curso) => {
    const categoriaCurso = curso.getAttribute("data-categoria");

    if (categoria === "Todos" || categoria === categoriaCurso) {
      curso.style.display = "block";
    } else {
      curso.style.display = "none";
    }
  });
}
