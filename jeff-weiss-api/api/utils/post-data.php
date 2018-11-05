<?php
  function return_link_list($p) {
    $links = array();
    if ( have_rows( 'link_list', $p->id ) ) :
      while ( have_rows( 'link_list', $p->id ) ) : the_row();
        $links[] = array(
          'url' => get_sub_field('url'),
          'title' => get_sub_field('title'),
        );
      endwhile;
    else :
      $links = false;
    endif;
    return $links;
  }
  
  function post_data($post) {
    $template = get_post_meta( $post->ID, '_wp_page_template', true );
    $template_name = return_template($template);
    $permalink = get_permalink($post->ID);
    return array(
      'id' => $post->ID,
      'title' => $post->post_title,
      'slug' => $post->post_name,
      'thumbnail' => get_the_post_thumbnail_url($post->ID),
      'is_home' => return_home($permalink),
      'template' => $template_name,
      'top_content' => get_field('show_top_content', $post->ID),
      'theme' => get_field('theme', $post->ID),
      'short_description' => get_field('short_description', $post->ID),
      'description' => get_field('description', $post->ID),
      'container_width' => return_null_false(get_field('top_style', $post->ID)),
      'link_list' => return_link_list($post),
      'content' => template_data($template_name, $post),
      'taxonomies' => taxonomy_data($post),
    );
  }
?>
