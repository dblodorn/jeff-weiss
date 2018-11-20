<?php
  // ALL PROJECTS CPT
  function cpt_project(){
    $args = array(
      'post_type' => 'project',
      'posts_per_page' => -1
    );
    $the_query = new WP_Query( $args );
    if ( $the_query->have_posts() ) :
      $data = array();
      while ($the_query->have_posts()) : $the_query->the_post();
        $post = get_post($post_id);
        $data[] = post_data($post);
      endwhile;
    endif;
    return $data;
  }

  // SINGLE
  function get_single_project(WP_REST_Request $request){
    $slug = $request['name'];
    if ($slug) {
      $args = array(
        'name' => $slug,
        'post_type' => 'project'
      );
      $the_query = new WP_Query($args);
      if ( $the_query->have_posts() ) :
        while ( $the_query->have_posts() ) : $the_query->the_post();
        $post = get_post($post_id);
        $post_data = post_data($post);
        endwhile;
      endif;
    }
    return $post_data;
  }
?>