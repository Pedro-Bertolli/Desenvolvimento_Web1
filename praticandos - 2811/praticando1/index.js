// Referências aos containers
const leftContainer = document.getElementById("left-container");
const rightContainer = document.getElementById("right-container");

// Função para obter o container ativo com base no radio button selecionado
const getActiveContainer = () => {
    const side = document.querySelector('input[name="side"]:checked').value;
    return side === "left" ? leftContainer : rightContainer;
};

// Manipulação de parágrafos
let paragraphCount = 0;

document.getElementById("add-paragraph").addEventListener("click", () => {
    paragraphCount++;
    const p = document.createElement("p");
    p.textContent = `${paragraphCount}º parágrafo`;
    getActiveContainer().appendChild(p);
});

document.getElementById("remove-first-paragraph").addEventListener("click", () => {
    const container = getActiveContainer();
    if (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});

document.getElementById("remove-last-paragraph").addEventListener("click", () => {
    const container = getActiveContainer();
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});

document.getElementById("remove-all-paragraphs").addEventListener("click", () => {
    const container = getActiveContainer();
    container.innerHTML = "";
    paragraphCount = 0;
});

// Manipulação de imagens
document.getElementById("add-image").addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "gatinho.jpg";
    img.alt = "Imagem";
    img.className = "d-block mb-2";
    getActiveContainer().appendChild(img);
});

document.getElementById("remove-one-image").addEventListener("click", () => {
    const container = getActiveContainer();
    const images = container.querySelectorAll("img");
    if (images.length > 0) {
        container.removeChild(images[0]);
    }
});

document.getElementById("remove-all-images").addEventListener("click", () => {
    const container = getActiveContainer();
    const images = container.querySelectorAll("img");
    images.forEach((img) => container.removeChild(img));
});