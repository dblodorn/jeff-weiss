<?php
  $data = array();
  function get_project_list($field, $p) {
    $posts = get_field($field, $p->ID);
    if($posts):
      $data = array();
      foreach( $posts as $p ):
        $p_data = get_post($p->ID);
        $data[] = array(
          'post_id' => $p_data->ID,
          'slug' => $p_data->post_name,
          'title' => get_the_title($p_data),
          'post_type' => $p_data->post_type,
          'thumbnail' => get_the_post_thumbnail_url($p->ID),
          'short_description' => get_field('short_description', $p->ID),
        );
      endforeach;
    endif;
    return $data;
  }
  
  function post_collection_template($p){
    $post_collection = get_field('post_collection', $p->ID);
    return array(
      'insert_type' => get_field('insert_type', $p->ID),
      'post_type' => return_null_false(get_field('post_type', $p->ID)),
      'popup_grid' => get_field('popup_grid', $p->ID),
      'columns' => get_field('columns', $p->ID),
      'link_wrapper' => get_field('link_wrapper', $p->ID),
      'link_button' => get_field('link_button', $p->ID),
      'show_title' => get_field('show_title', $p->ID),
      'show_thumbnail' => get_field('show_thumbnail', $p->ID),
      'show_taxonomies' => get_field('show_taxonomies', $p->ID),
      'show_post_taxonomies' => get_field('show_post_taxonomies', $p->ID),
      'thumbnail_proportion' => get_field('thumbnail_proportion', $p->ID),
      'thumbnail_proportion_mobile' => get_field('thumbnail_proportion_mobile', $p->ID),
      'thumbnail_proportion_max' => get_field('thumbnail_proportion_max', $p->ID),
      'style' => get_field('style', $p->ID),
      'container_width' => return_null_false(get_field('container_width', $p->ID)),
      'post_collection' => get_project_list('post_collection', $p)
    );
  }
?>
