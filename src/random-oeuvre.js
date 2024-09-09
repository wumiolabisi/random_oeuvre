import { getRandomOeuvres } from "./modules/getRandomOeuvres";

const loadRandomPosts = document.getElementById('random-oeuvre-btn');

if (loadRandomPosts) {
    loadRandomPosts.addEventListener('click', function () {


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


    });


}