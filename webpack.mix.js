let mix = require('laravel-mix');

mix.setPublicPath('public'); // Définit le chemin de sortie des fichiers compilés

// Compilation des fichiers JS
mix.js('src/main.js', 'public/main.js')
    .sass('src/style.scss', 'public/style.css')
    .options({
        processCssUrls: false // Empêche Laravel Mix de modifier les URLs dans les fichiers CSS
    });

// Versionner les fichiers en production (pour gérer le cache)
if (mix.inProduction()) {
    mix.version();
}

// Activer la synchronisation avec le navigateur en développement
mix.browserSync({
    proxy: 'localhost',
    files: [
        'public/*.css',
        'public/*.js',
        '**/*.php'
    ]
});
