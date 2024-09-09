export function getAllOeuvres() {

    let ids = [];
    let randomOeuvres = [];
    let fetchPromises = [];

    //Fouiller dans les posts existants
    const allOeuvres = new wp.api.collections.Oeuvres();
    allOeuvres.fetch().done(function (posts) {

        // Stocker les IDs existants
        posts.forEach(post => {
            ids.push(post.id);
        });

        //Choisir 3 ids au hasard dans les ids existants
        for (let i = 0; i < 3; i++) {
            randomOeuvres.push(ids[Math.floor(Math.random() * ids.length)]);
        }

        //Pour chaque id choisi, on appelle le post correspondant
        //et on stocke la Promise
        randomOeuvres.forEach(id => {
            let post = new wp.api.models.Oeuvres({ id: id });
            fetchPromises.push(post.fetch());

        });


        //Promise.all pour attendre que toutes les requêtes fetch soient complètes

        Promise.all(fetchPromises)
            .then(posts => {
                return posts;
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des posts : ', error);
            });


    });

}