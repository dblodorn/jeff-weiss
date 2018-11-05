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

  function return_videos($post) {
    $description = get_field('description', $post->ID);
    return array (
      'post_id' => $post->ID,
      'title' => $post->post_title,
      'slug' => $post->post_name,
      'thumbnail' => return_thumb_url($post->ID),
      'thumbnail_description' =>  return_thumb_meta($post),
      'template' => 'single-video',
      'top_content' => get_field('show_top_content', $post->ID),
      'theme' => get_field('theme', $post->ID),
      'short_description' => get_field('short_description', $post->ID),
      'description' => return_null_false($description),
      'video_url' => get_field('video_url', $p->ID, false, false),
    );
  }

  function cpt_videos(){
    $args = array(
      'post_type' => 'video',
      'posts_per_page' => -1
    );
    $the_query = new WP_Query( $args );
    if ( $the_query->have_posts() ) :
      $data = array();
      while ($the_query->have_posts()) : $the_query->the_post();
        $post = get_post($post_id);
        $data[] = return_videos($post);
      endwhile;
    endif;
    return $data;
  }

  function cpt_instagram(){
    $args = array(
      'post_type' => 'instagram_post',
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