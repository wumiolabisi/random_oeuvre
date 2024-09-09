import { getAllOeuvres } from "./modules/getAllOeuvres";

const loadRandomPosts = document.getElementById('random-oeuvre-btn');

if (loadRandomPosts) {
    loadRandomPosts.addEventListener('click', function () {


        const popup = document.createElement('div');
        popup.className = 'random-popup-container';

        const popupContent = document.createElement('div');
        popupContent.className = 'random-popup-content';
        popup.appendChild(popupContent);

        popupContent.innerHTML = '';

        console.log(getAllOeuvres());
        /*
                posts.forEach(post => {
        
        
                    popupContent.innerHTML += `
                                    <div class="random-popup-item">
                                          <a href="${post.link}" target="_blank">
                                         
                                             <p class="h2">${post.title.rendered}</p>
                                            </a>
                                     </div>`;
                });*/
        document.body.appendChild(popup);


    });


}