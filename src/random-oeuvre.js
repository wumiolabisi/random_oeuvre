import { getRandomOeuvres } from "./modules/getRandomOeuvres";

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


            posts.forEach(post => {

                popupContent.innerHTML += `
                <div class="random-popup-item" id="${post.id}">
                      <a href="${post.link}" target="_blank">
                      <p class="h2 ro-capitalize">${post.title.rendered}</p>
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