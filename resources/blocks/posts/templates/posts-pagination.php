<?php

/**
 * Pagination fallback
 */

the_posts_pagination([
    'mid_size'           => 1,
    'prev_text'          => _x( 'Previous', 'previous set of posts' ),
    'next_text'          => _x( 'Next', 'next set of posts' ),
    'screen_reader_text' => sprintf( __( '%s navigation', 'wbl-blocks' ), __( 'Posts' ) ),
    'aria_label'         => __( 'Posts' ),
]);
