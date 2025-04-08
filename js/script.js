// recupero elementi del DOM
const div = document.getElementById('div');
const containerOverlay = document.getElementById('container-overlay');
const imgOverlay = document.getElementById('img-overlay');
const closeButton = document.getElementById('button');

// dichiaro variabili
const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

// funzione che mi crea la card
const createImgCard = (data) => {
    const card = `
        <div class="col-12 col-md-6 col-lg-4 mb-5">
            <div class="card-content bg-white d-flex flex-column align-items-start p-3 position-relative">
                <img src="./img/pin.svg" alt="Immagine" class="pin">
                <img src="${data.url}" alt="Immagine" class="card-img">
                <p class="sometype-mono text-start mb-1 mt-2 text-secondary">${data.date}</p>
                <h5 class="sometype-mono text-start mb-0 fs-3 fw-bolder">${data.title}</h5>
            </div>
        </div>
    `;
    div.innerHTML += card; 
};

// recupero dati 
const recuperoDati = () => {
    axios.get(endpoint)
        .then(response => {
            response.data.forEach(item => createImgCard(item)); 
        });
};

// chiamo la funzione
recuperoDati();