export function getRandomOeuvres() {

    let ids = [];
    let fetchPromises = [];

    //Fouiller dans les posts de type Oeuvres existants
    const allOeuvres = new wp.api.collections.Oeuvres();

    return allOeuvres.fetch({
        data: {
            _embed: true
        }
    }).then(function (postsId) {
        // Stocker les IDs existants

        postsId.forEach(post => {
            ids.push(post.id);
        });


        //Choisir 3 ids au hasard dans les ids existants
        for (let i = 0; i < 3; i++) {
            let selectedId = ids[Math.floor(Math.random() * ids.length)];
            let selectedPost = new wp.api.models.Oeuvres({ id: selectedId });
            fetchPromises.push(selectedPost.fetch({
                data: {
                    _embed: true
                }
            }));
        }

        //Promise.all pour attendre que toutes les requêtes fetch soient complètes
        return Promise.all(fetchPromises);
    });
}