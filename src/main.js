import { getRandomOeuvres } from "./modules/getRandomOeuvres";

function onBtnClick() {


    const popup = document.createElement('div');
    popup.className = 'random-popup-container';


    //si l'utilisateur clique en dehors de la zone blanche, la popup disparait
    popup.addEventListener('click', function () {
        popup.remove();
    });

    const popupContent = document.createElement('div');
    popupContent.className = 'random-popup-content';
    popup.appendChild(popupContent);
    popupContent.innerHTML = '<p class="ro-txt-bold ro-txt-lg">Trois &oelig;uvres au hasard...</p>';


    getRandomOeuvres().then(posts => {
        popupContent.innerHTML = '';

        posts.forEach(post => {

            popupContent.innerHTML += `
            <div class="random-popup-item" id="${post.id}">
                  <a href="${post.link}" target="_blank">
                  <h3 class="h2 ro-capitalize ro-txt-bold ro-txt-lg">${post.title.rendered}</h3>
                  <div class="ro-featured-img">
                 <img src="${post._embedded['wp:featuredmedia'][0].source_url}" class="ro-cover"/>
                 </div>
                    </a>
             </div>`;
        });

    }).catch(error => {
        popupContent.innerHTML += `<div class="random-popup-item">Erreur lors de la récupération des posts : ${error}</div>`;
    });

    document.body.appendChild(popup);
}

const loadRandomPosts = document.getElementsByClassName('random-oeuvre-btn');

if (loadRandomPosts) {
    for (let count = 0; count < loadRandomPosts.length; count++) {
        loadRandomPosts[count].addEventListener('click', onBtnClick, false);
    }
}