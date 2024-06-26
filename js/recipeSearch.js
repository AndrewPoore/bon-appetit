import { lastModified, checkLocalStorage, closeMessage, startBtnAnimation, endBtnAnimation } from "./utils.mjs";

async function queryFetch(search) {
    const url = "https://api.spoonacular.com/recipes/complexSearch/?apiKey=78ffb0b539b043daa6745c6c525bbe44&query=" + search;
    try {
        const response = await fetch(url);
        if (response.ok) {
            var object = await response.json();
            console.log(object.results);
            return object.results;
        } else {
            console.log(`Response not OK ${await response.text()}`);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

async function buildCards() {
    startBtnAnimation();
    var search = document.querySelector('#search').value;
    let array = await queryFetch(search);
    for (let i = 0; i < array.length; i++) {
        let currentObject = array[i];
        let currentImg = currentObject.image;
        let currentTitle = currentObject.title;
        cardContent(currentImg, currentTitle);
    }
    endBtnAnimation();
}

function cardContent(src, text) {
    let container = document.querySelector('#cardCtn');
    let div = document.createElement('div');
    let heading = document.createElement('h2');
    let image = document.createElement('img');
    div.classList.add('recipe-card');
    heading.textContent = text;
    image.src = src;
    image.alt = text;
    div.append(heading);
    div.append(image);
    container.prepend(div);
}

lastModified();
checkLocalStorage();

//Recipe Search
let btn = document.querySelector('#recipe-btn');
btn.addEventListener('click', buildCards);

document.querySelector('.message-btn').addEventListener('click', closeMessage);