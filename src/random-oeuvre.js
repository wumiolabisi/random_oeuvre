import { getRandomOeuvres } from "./modules/getAllOeuvres";

const loadRandomPosts = document.getElementById('random-oeuvre-btn');

if (loadRandomPosts) {
    loadRandomPosts.addEventListener('click', function () {


        const popup = document.createElement('div');
        popup.className = 'random-popup-container';

        const popupContent = document.createElement('div');
        popupContent.className = 'random-popup-content';
        popup.appendChild(popupContent);

        popupContent.innerHTML = '';

        getRandomOeuvres().then(posts => {
            console.log(posts);
            posts.forEach(post => {
                popupContent.innerHTML += `
                <div class="random-popup-item">
                      <a href="${post.link}" target="_blank">
                     
                         <p class="h2">${post.title.rendered}</p>
                        </a>
                 </div>`;
            });

        }).catch(error => {
            popupContent.innerHTML += `<div class="random-popup-item">Erreur lors de la récupération des posts : ${error}</div>`;
        });

        document.body.appendChild(popup);


    });


}