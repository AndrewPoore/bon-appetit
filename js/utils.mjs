export function checkLocalStorage() {
    function generateWelcomeMessage() {
        let div = document.createElement('div');
        let heading = document.createElement('h3');
        let btn = document.createElement('button');
        let p = document.createElement('p');
        let image = document.createElement('img');
        let main = document.querySelector('main');

        div.classList.add('message-ctn');
        heading.classList.add('message-h3');
        btn.classList.add('message-btn');
        p.classList.add('message-p');

        heading.textContent = `Welcome to Bon Appétit!`;
        btn.textContent = `✖️`;
        p.textContent = `Welcome to [Your Project Name]!
        
        We're delighted to welcome you to our final project website. Whether you stumbled upon us by chance or sought us out intentionally, we're thrilled to have you here.
        
        This website is the culmination of our hard work, creativity, and dedication. It's a testament to our journey throughout this project and the passion we've poured into every aspect of it.
        
        As you navigate through our website, we invite you to immerse yourself in our project. Explore the intricacies of our work, delve into the details, and uncover the stories behind our journey. We've crafted this space to showcase not just our accomplishments, but the learning and growth that have come along the way.
        
        Thank you for being a part of this experience. Whether you're here to learn, be inspired, or simply curious, we hope you find what you're looking for and leave feeling enriched.
        
        Welcome to the world of [Your Project Name]!
        
        [Your Name/Project Team Name]`;
        image.src = 'imgs/cake.jpg';
        image.alt = `Me making pineapple upside down cake.`;

        div.append(btn);
        main.append(div);
        div.append(heading);
        div.append(p);
        div.append(image);
    }
    if (localStorage.getItem("visited") != "true") {
        localStorage.setItem("visited", "true");
        document.querySelector('.main-content').classList.add('hidden');
        generateWelcomeMessage();
    }
    else {
        document.querySelector('.main-content').classList.remove('hidden');
    }
}

export function closeMessage() {
    document.querySelector('.message-ctn').remove();
    document.querySelector('.main-content').classList.remove('hidden');
}

export function lastModified() {
    let lastMod = document.querySelector('#modified');
    lastMod.textContent = `Modified: ${document.lastModified}`;
}

export function startBtnAnimation() {
    document.querySelector('button').classList.add('recipe-btn-active');
}

export function endBtnAnimation() {
    document.querySelector('button').classList.remove('recipe-btn-active');
}