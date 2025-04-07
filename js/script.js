// recupero elementi del DOM
const div = document.getElementById('div');

// dichiaro variabili
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

// funzione che mi crea la card
const createImgCard = (endpoint) =>{
    const card = `<div class="card-img bg-white d-flex flex-column align-items-start p-3 position-relative">
                        <img src="${endpoint.url}" alt="Immagine" class="pin">
                        <div class="card-content bg-danger-subtle"></div>
                        <p class="sometype-mono text-start mb-1 mt-2 text-secondary">${endpoint.date}</p>
                        <h5 class="sometype-mono text-start mb-0 fs-3 fw-bolder">${endpoint.title}</h5>
                    </div>`;
    div.innerHTML += card;
}