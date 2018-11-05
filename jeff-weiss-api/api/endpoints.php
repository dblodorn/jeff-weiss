<?php
  function main_data(){
    $data = array();
    $data['site_basics'] = site_basics_data();
    $data['menus'] = menu_data();
    $data['posts'] = array(
      'pages' => page_data(),
      'project' => cpt_project(),
      'video' => cpt_videos(),
      'instagram' => cpt_instagram(),
    );
    $data['options'] = options_data();
    return $data;
  }
  function api_setup_endpoints() {
    $namespace = 'api/v1';
    register_rest_route( $namespace, '/data/', array(
      'methods' => 'GET',
      'callback' => 'main_data'
    ));
    // Individual Posts
    register_rest_route( $namespace, '/project/', array(
      'methods' => 'GET',
      'callback' => 'get_single_project',
    ));

  }
add_action( 'rest_api_init', 'api_setup_endpoints' );
