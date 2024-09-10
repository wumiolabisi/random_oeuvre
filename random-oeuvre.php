<?php
/*
Plugin Name: Random Oeuvre
Description: Ce plugin permet de proposer un custom post type Oeuvre au hasard, à la demande de l'utilisateur.
Version: 1.0.0
Author: Omowumi OLABISI
Author URI: https://omowumi-olabisi.fr
*/
// If this file is called directly, abort.
if (! defined('WPINC')) {
    die;
}

/**
 * Currently plugin version.
 */
define('RANDOM_OEUVRE_VERSION', '1.0.0');

/**
 * Styles et js associés au plugin
 */
function random_oeuvre_assets()
{
    wp_enqueue_script(
        'ro-main',
        plugin_dir_url(__FILE__) . 'public/main.js',
        array('jquery', 'wp-api'),
        '1.0',
        true
    );
    wp_enqueue_style(
        'ro-style',
        plugin_dir_url(__FILE__) . 'public/style.css',
        array(),
        '1.0'
    );
}

add_action('wp_enqueue_scripts', 'random_oeuvre_assets');


function get_random_oeuvre_shortcode()
{
    return '<button id="random-oeuvre-btn">LA FLEMME DE CHERCHER ?</button>';
}
add_shortcode('get_random_oeuvre', 'get_random_oeuvre_shortcode');


function random_oeuvre_activation() {}

function random_oeuvre_deactivation()
{
    wp_dequeue_script('random-oeuvre');
    wp_dequeue_script('random-oeuvre');
    remove_shortcode('random_oeuvre');
}

register_activation_hook(__FILE__, 'random_oeuvre_activation');
register_deactivation_hook(__FILE__, 'random_oeuvre_deactivation');
