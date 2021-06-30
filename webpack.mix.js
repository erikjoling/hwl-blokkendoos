/***
 * Laravel Mix configuration file.
 *
 * Laravel Mix is a layer built on top of WordPress that simplifies much of the
 * complexity of building out a Webpack configuration file. Use this file to
 * configure how your assets are handled in the build process.
 *
 * @link https://laravel-mix.com/docs/5.0/installation
 * @link https://laravel.com/docs/5.6/mix
 *
 * @package   WBL\Blocks
 * @author    Erik Joling <erik@hetweblokaal.nl>
 * @copyright 2021 Erik Joling
 * @link      https://www.hetweblokaal.nl/
 */

// Import required packages.
const mix = require( 'laravel-mix' );

/**
 * Sets the development path to assets. By default, this is the `/assets`
 * folder in the theme.
 */
const devPath  = 'src';
const pubPath  = 'assets';
const blockPath  = 'app/blocks';

/**
 * Sets the path to the generated assets. By default, this is the `/dist` folder
 * in the theme. If doing something custom, make sure to change this everywhere.
 */
mix.setPublicPath( pubPath );

/**
 * Set Laravel Mix options.
 *
 * @link https://laravel-mix.com/docs/5.0/options
 * @link https://laravel.com/docs/5.6/mix#postcss
 * @link https://laravel.com/docs/5.6/mix#url-processing
 * @link https://github.com/csstools/postcss-preset-env
 */
mix.options( {
	postCss : [
		require( 'postcss-import' )(),
		require( 'postcss-mixins' )(),
		require( 'postcss-nested' )(),
		require( 'postcss-preset-env' )({
			stage: 2,
			features: {
				'custom-media-queries': true
			}
		})
	],
	processCssUrls : false
} );

/**
 * Builds sources maps for assets. Only when not in production
 *
 * @link https://laravel.com/docs/5.6/mix#css-source-maps
 */
if (! mix.inProduction()) {
	mix.sourceMaps();
}

/**
 * Versioning and cache busting. Append a unique hash for production assets. If
 * you only want versioned assets in production, do a conditional check for
 * `mix.inProduction()`.
 *
 * @link https://laravel.com/docs/5.6/mix#versioning-and-cache-busting
 */
mix.version();

/**
 * Compile Gutenberg blocks
 */

// Archive loop block
mix.react(   `${blockPath}/archive-loop/index.js`,   'js/archive-loop.js'  )
   .postCss( `${blockPath}/archive-loop/style.css`,  'css/archive-loop.css' );

// Posts loop block
mix.react(   `${blockPath}/posts/index.js`,   'js/posts.js'  )
   .postCss( `${blockPath}/posts/style.css`,  'css/posts.css' );

