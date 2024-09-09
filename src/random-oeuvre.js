const loadRandomPosts = document.getElementById('random-oeuvre-btn');
let ids = [];
let randomOeuvres = [];

if (loadRandomPosts) {
    loadRandomPosts.addEventListener('click', function () {

        const allOeuvres = new wp.api.collections.Oeuvres();

        const popup = document.createElement('div');
        popup.className = 'random-popup-container';

        const popupContent = document.createElement('div');
        popupContent.className = 'random-popup-content';
        popup.appendChild(popupContent);
        // Tableau pour stocker les promesses de fetch
        let fetchPromises = [];

        allOeuvres.fetch().done(function (posts) {
            posts.forEach(post => {
                ids.push(post.id);
            });
            /**
             * Get 3 random posts from existing ids
             */
            for (let i = 0; i < 3; i++) {
                randomOeuvres.push(ids[Math.floor(Math.random() * ids.length)]);
            }

            randomOeuvres.forEach(id => {
                let post = new wp.api.models.Oeuvres({ id: id });
                fetchPromises.push(post.fetch());

            });

            /**
             * Promise.all pour attendre que toutes les requêtes fetch soient complètes
             */
            Promise.all(fetchPromises)
                .then(posts => {
                    console.log('Variable POSTS : ' + posts);

                    // Vide le contenu précédent du popup
                    popupContent.innerHTML = '';

                    // Crée le contenu du popup avec tous les posts récupérés
                    posts.forEach(post => {
                        console.log(post);


                        popupContent.innerHTML += `
                            <div class="random-popup-item">
                                  <a href="${post.link}" target="_blank">
                                 
                                     <p class="h2">${post.title.rendered}</p>
                                    </a>
                             </div>`;
                    });
                    document.body.appendChild(popup);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des posts:', error);
                });

        });


    });
}