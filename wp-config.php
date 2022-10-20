<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'project' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4;}FJH^Sa&h@$54pVAh}:S2qp6[Ad|8GaSHPXk[t9R:|G*GtZ9Gx(r(?y*)rxRrz' );
define( 'SECURE_AUTH_KEY',  '<~>!C]V[KB2XFu^xAhNojXUAg^}S{LH(LN_Gth%~p#(n(G)@7ejHo,d[:XY(>qar' );
define( 'LOGGED_IN_KEY',    'P/h~7fM<4!x]yhwj~D*0&}ex2dnxqVVEE3%M3;U]qFeb52%P@,aJB ^];,o9Tr|S' );
define( 'NONCE_KEY',        'el[b8jyvo0+{}SM7w1qvp`dO*{effEsy9+O>0aNsFudy[x&KTt 9Sc{/Ur9=C$Og' );
define( 'AUTH_SALT',        '%yJBMc+!JN;[Kv/F>tf{)>VHW[^S4.#)>Gp;ph`M,-UHp*1O(lh_IUQ#O;ky*:$)' );
define( 'SECURE_AUTH_SALT', '_Zn#4mH(b7.N]qpivCfiX(`Cx{_*|QKO32xlHvsN0U?x]B=:T*CZ,+X]ULZMQhST' );
define( 'LOGGED_IN_SALT',   '({XMY~^f&<gV|t~av4#`*(4~p|T+S0Kj*cUqvkh=[~A(ePg1~NEP ?[#/|-H{56p' );
define( 'NONCE_SALT',       'IlGqRQ>PmG0yEE&m<pG#3&j^xn:%8{@C<}@DxH{Ogs9R)Ksw=I;X&)s3ybv=`$!v' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
