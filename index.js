const app = document.getElementById("app")
const url = "";

// Déclaration de constante
const form = document.getElementById('form')
const input = document.getElementsByTagName('input');

// Input Radio
for (i = 0; i < input.length; i++) {
    input[i].onclick = function (e) {
        if (e.ctrlKey) this.checked = false;
    }
}

function makeSearch() {

    // On crée le container
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    // On crée le row 
    const row = document.createElement("div");
    row.setAttribute("class", "row")
    row.setAttribute("id", "listCard")

    // On crée l'Input ( div + span)
    const divInput = document.createElement("div");
    divInput.setAttribute("class", "input-group flex-nowrap py-2");

    const spanInput = document.createElement("span");
    spanInput.setAttribute("class", "input-group-text");
    spanInput.innerText = "Recherche";

    const input = document.createElement("input");
    input.setAttribute("class", "form-control");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Votre recherche");
    input.setAttribute("aria-label", "Votre recherche");
    input.setAttribute("aria-describedby", "addon-wrapping");
    input.setAttribute("onkeypress", "");
    input.setAttribute("id", "inputSearch");

    // On rattache notre container au site et l'input à notre container
    app.appendChild(container);
    container.appendChild(divInput);
    divInput.appendChild(spanInput);
    divInput.appendChild(input);
}


function maListDeCards() {
    console.log("maListDeCards");

    // On crée le container
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    // On crée le row 
    const row = document.createElement("div");
    row.setAttribute("class", "row")
    row.setAttribute("id", "listCard")

    app.appendChild(container);
    container.appendChild(row);

    const secttitle = document.createElement("h2")
    secttitle.setAttribute("class", "text-center")
    secttitle.innerText = "Cards"

    row.appendChild(secttitle);

    // On crée notre boucle 
    //for (let i = 0; i < arrayImg.length; i++) {
    const colmd4 = document.createElement("div")
    colmd4.setAttribute("class", "col-md-4")

    // On construit nos cards + données API
    const card = document.createElement("div");
    card.setAttribute("class", "card")
    card.setAttribute("style", "width:18rem")

    const img = document.createElement("img");
    img.setAttribute("class", "card-img-top")
    img.setAttribute("src", "https://pixabay.com/get/gad5eb4328604440b474def3e876e41ec2550cb6bb812994bceef8f5febf427e5a584290ad6a2ffd79a57d6dea69087b3_640.png");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body")

    const title = document.createElement("h5");
    title.setAttribute("class", "card-title")
    title.innerText = "type: "



    const tags = document.createElement("p");
    tags.setAttribute("class", "card-text");
    tags.innerText = "tags: "

    const link = document.createElement("a");
    link.setAttribute("class", "card-text btn btn-primary");
    link.setAttribute("href", "#");
    link.setAttribute("target", "_blank");
    link.innerText = "Voir Photos";

    // ON rattache card à notre row
    row.appendChild(colmd4);
    colmd4.appendChild(card);
    // On rattache img et le cardBody à notre card
    card.appendChild(img);
    card.appendChild(cardBody);
    // on constitue notre body
    cardBody.appendChild(title);
    cardBody.appendChild(tags);
    cardBody.appendChild(link);


}

function mounted() {
    makeSearch()
    maListDeCards()

}

 mounted()