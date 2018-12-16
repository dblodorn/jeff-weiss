<?php

//-------------------------------------------------------------------
// CUSTOM TAXONOMIES
//-------------------------------------------------------------------

// Client taxonomy
add_action( 'init', 'capbility_taxonomy', 30 );
  function capbility_taxonomy() {
  $labels = array(
    'name'                  => _x( 'Capabilities', 'taxonomy general name' ),
    'singular_name'         => _x( 'Capability', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Capabilities' ),
    'all_items'             => __( 'All Capabilities' ),
    'parent_item'           => __( 'Parent Capabilities' ),
    'parent_item_colon'     => __( 'Parent Capabilitie:' ),
    'edit_item'             => __( 'Edit Capability' ),
    'update_item'           => __( 'Update Capability' ),
    'add_new_item'          => __( 'Add New Capability' ),
    'new_item_name'         => __( 'New Capability Name' ),
    'menu_name'             => __( 'Capabilities' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'capability' ),
    'show_in_rest'          => true,
    'rest_base'             => 'capability-taxonomy-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'capability', array( 'project' ), $args );
}

// Client taxonomy
add_action( 'init', 'client_taxonomy', 30 );
  function client_taxonomy() {
  $labels = array(
    'name'                  => _x( 'Clients', 'taxonomy general name' ),
    'singular_name'         => _x( 'Client', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Clients' ),
    'all_items'             => __( 'All Clients' ),
    'parent_item'           => __( 'Parent Clients' ),
    'parent_item_colon'     => __( 'Parent Client:' ),
    'edit_item'             => __( 'Edit Client' ),
    'update_item'           => __( 'Update Client' ),
    'add_new_item'          => __( 'Add New Client' ),
    'new_item_name'         => __( 'New Client Name' ),
    'menu_name'             => __( 'Clients' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'client' ),
    'show_in_rest'          => true,
    'rest_base'             => 'client-taxonomy-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'client', array( 'project' ), $args );
}

// Industry taxonomy
add_action( 'init', 'industry_taxonomy', 30 );
  function industry_taxonomy() {
  $labels = array(
    'name'                  => _x( 'Industries', 'taxonomy general name' ),
    'singular_name'         => _x( 'Industry', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Industries' ),
    'all_items'             => __( 'All Industries' ),
    'parent_item'           => __( 'Parent Industries' ),
    'parent_item_colon'     => __( 'Parent Industry:' ),
    'edit_item'             => __( 'Edit Industry' ),
    'update_item'           => __( 'Update Industry' ),
    'add_new_item'          => __( 'Add New Industry' ),
    'new_item_name'         => __( 'New Industry Name' ),
    'menu_name'             => __( 'Industries' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'industry' ),
    'show_in_rest'          => true,
    'rest_base'             => 'industry-taxonomy-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'industry', array( 'project' ), $args );
}

// Type taxonomy
add_action( 'init', 'instagram_tag', 30 );
  function instagram_tag() {
  $labels = array(
    'name'                  => _x( 'Instgram Tag', 'taxonomy general name' ),
    'singular_name'         => _x( 'Instgram Tag', 'taxonomy singular name' ),
    'search_items'          => __( 'Search Instgram Tags' ),
    'all_items'             => __( 'All Instgram Tags' ),
    'parent_item'           => __( 'Parent Instgram Tag' ),
    'parent_item_colon'     => __( 'Parent Instgram Tag:' ),
    'edit_item'             => __( 'Edit Instgram Tags' ),
    'update_item'           => __( 'Update Instgram Tag' ),
    'add_new_item'          => __( 'Add New Instgram Tag' ),
    'new_item_name'         => __( 'New Instgram Tags Name' ),
    'menu_name'             => __( 'Instgram Tag' ),
  );
  $args = array(
    'hierarchical'          => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'instagram-tag' ),
    'show_in_rest'          => true,
    'rest_base'             => 'instagram-tag-api',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );
  register_taxonomy( 'instagram_tag', array( 'instagram_post' ), $args );
}

//-------------------------------------------------------------------
// CUSTOM TAXONOMY FILTER DROPDOWNS IN ADMIN
//-------------------------------------------------------------------

function tsm_filter_post_type_by_taxonomy($post_type, $taxonomy) {
	global $typenow;
	if ($typenow == $post_type) {
		$selected      = isset($_GET[$taxonomy]) ? $_GET[$taxonomy] : '';
		$info_taxonomy = get_taxonomy($taxonomy);
		wp_dropdown_categories(array(
			'show_option_all' => __("All {$info_taxonomy->label}"),
			'taxonomy'        => $taxonomy,
			'name'            => $taxonomy,
			'orderby'         => 'name',
			'selected'        => $selected,
			'show_count'      => true,
			'hide_empty'      => true,
		));
	};
}

function filter_project_client() {
  tsm_filter_post_type_by_taxonomy('project', 'client');
}

function filter_project_industry() {
  tsm_filter_post_type_by_taxonomy('project', 'industry');
}

function filter_project_capability() {
  tsm_filter_post_type_by_taxonomy('project', 'capability');
}

function filter_tag() {
  tsm_filter_post_type_by_taxonomy('instagram_post', 'instagram_tag');
}

add_action('restrict_manage_posts', 'filter_project_client');
add_action('restrict_manage_posts', 'filter_project_industry');
add_action('restrict_manage_posts', 'filter_project_capability');
add_action('restrict_manage_posts', 'filter_tag');

// NEXT
function tsm_convert_id_to_term_in_query_client($query) {
	global $pagenow;
	$post_type = 'project';
	$taxonomy  = 'client';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

function tsm_convert_id_to_term_in_query_industry($query) {
	global $pagenow;
	$post_type = 'project';
	$taxonomy  = 'industry';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

function tsm_convert_id_to_term_in_query_capability($query) {
	global $pagenow;
	$post_type = 'project';
	$taxonomy  = 'capability';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

function tsm_convert_id_to_term_in_query_ig($query) {
	global $pagenow;
	$post_type = 'instagram_post';
	$taxonomy  = 'instagram_tag';
	$q_vars    = &$query->query_vars;
	if ( $pagenow == 'edit.php' && isset($q_vars['post_type']) && $q_vars['post_type'] == $post_type && isset($q_vars[$taxonomy]) && is_numeric($q_vars[$taxonomy]) && $q_vars[$taxonomy] != 0 ) {
		$term = get_term_by('id', $q_vars[$taxonomy], $taxonomy);
		$q_vars[$taxonomy] = $term->slug;
	}
}

add_filter('parse_query', 'tsm_convert_id_to_term_in_query_client');
add_filter('parse_query', 'tsm_convert_id_to_term_in_query_industry');
add_filter('parse_query', 'tsm_convert_id_to_term_in_query_capability');
add_filter('parse_query', 'tsm_convert_id_to_term_in_query_ig');

?>