let btn = document.querySelector('#recipe-btn');
btn.addEventListener('click', buildCards);

async function queryFetch(search) {
    const url = "https://api.spoonacular.com/recipes/complexSearch/?apiKey=fe355abf4202442b8a3dd4225ce62f11&query=" + search;
    const response = await fetch(url);
    var object = await response.json();
    console.log(object.results);
    return object.results;
}

async function buildCards() {
    var search = document.querySelector('#search').value;
    let array = await queryFetch(search);
    for (let i = 0; i < array.length; i++) {
        let currentObject = array[i];
        let currentImg = currentObject.image;
        let currentTitle = currentObject.title;
        cardContent(currentImg, currentTitle);
    }
}

function cardContent(src, text) {
    let div = document.createElement('div');
    let image = document.createElement('img');
    let heading = document.createElement('h3');
    let container = document.querySelector('#cardCtn');
    image.src = src;
    heading.textContent = text;
    div.classList.add('recipe-card');
    div.prepend(heading);
    div.append(image);
    container.append(div);
}