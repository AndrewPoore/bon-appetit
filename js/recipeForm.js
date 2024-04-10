import { lastModified, checkLocalStorage, closeMessage } from "./utils.mjs";

// const form = document.querySelector('#form');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const payload = new FormData(form);

//     console.log(...payload);

//     fetch(`https://api.spoonacular.com/recipes/analyze`, {
//         method: "POST",
//         body: payload,
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .then(err => console.log(err));
// })

const form = document.querySelector('#form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const payload = {
        "title": "Spaghetti Carbonara",
        "servings": 2,
        "ingredients": [
            "1 lb spaghetti",
            "3.5 oz pancetta",
            "2 Tbsps olive oil",
            "1  egg",
            "0.5 cup parmesan cheese"
        ],
        "instructions": "Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. "
    }

    fetch(`https://api.spoonacular.com/recipes/analyze/?apiKey=fe355abf4202442b8a3dd4225ce62f11`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: payload
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
});

lastModified();
checkLocalStorage();
document.querySelector('.message-btn').addEventListener('click', closeMessage);
