document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    const container = document.querySelector("#Cursos-container");
    let cursosData = []; // Armazene os dados dos cursos

    // Carregue os cursos do arquivo JSON
    fetch('./assets/linhaTempo.json')
        .then(response => response.json())
        .then(cursos => {
            cursosData = cursos; // Armazene os dados dos cursos
            // Exibir todos os cursos da categoria "Front-End" por padrão
            const categoriaPadrao = "Front-End";
            displayCursos(cursosData, categoriaPadrao);

            // Adicione manipuladores de eventos para cada botão
            buttons.forEach(button => {
                button.addEventListener("click", function () {
                    const categoria = button.id;
                    displayCursos(cursosData, categoria);
                });
            });
        });

    function displayCursos(cursos, categoria) {
        container.innerHTML = ""; // Limpe o conteúdo anterior

        const cursosFiltrados = cursos.filter(curso => curso.categoria === categoria);

        cursosFiltrados.forEach(curso => {
            const card = document.createElement("div");
            card.classList.add("curso");

            const titulo = document.createElement("h2");
            titulo.textContent = "Curso " + curso.nome;

            const sobre = document.createElement("p");
            sobre.textContent = curso.sobre;

            const link = document.createElement("a");
            link.href = curso.link;
            link.textContent = "O que aprendi neste curso";

            const imagem = document.createElement("img");
            imagem.src = curso.certificado;
            imagem.alt = "Certificado";

            card.appendChild(titulo);
            card.appendChild(sobre);
            card.appendChild(link);
            card.appendChild(imagem);

            container.appendChild(card);
        });
    }
});
 