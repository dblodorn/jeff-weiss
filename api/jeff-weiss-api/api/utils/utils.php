<?php
  function return_image($image){
    $id = $image['ID'];
    $post = get_post($id);
    $formatImg = array(
      'large' => $image['url'],
      'medium' => $image['sizes']['large'],
      'small' => $image['sizes']['medium'],
      'id' => $image['ID'],
      'description' => array(
        'alt' => get_post_meta($id)['_wp_attachment_image_alt'][0],
        'title' =>  $post->post_title,
        'caption' => $post->post_excerpt,
        'description' => $post->post_content,
      )
    );
    return $formatImg;
  }
  
  function return_categories($post_id) {
    $post_categories = wp_get_post_categories( $post_id );
    $cats = array();
    foreach($post_categories as $c){
      $cat = get_category( $c );
      $cats[] = array( 'name' => $cat->name, 'slug' => $cat->slug );
    }
    return $cats;
  }

  function return_taxonomy_array($p, $taxonomy) {
    // $taxonomy_return = get_the_terms($p->ID, $taxonomy);
    // return wp_list_pluck($taxonomy_return, 'name');
  };

  function return_taxonomy_array_with_slug($p, $taxonomy) {
    $terms = get_the_terms($p->ID, $taxonomy);
    $term_array = array();
    foreach($terms as $term) {
      $term_array[] = array(
        'name' => $term->name,
        'slug' => $term->slug
      );
    }
    return $term_array;
  };

  function return_project_types() {
    $tax = 'project-type';
    $terms = get_the_terms('project-type');
    $term_array = array();
    foreach($terms as $term) {
      $term_array[] = array(
        'name' => $term->name,
        'slug' => $term->slug
      );
    }
    return $term_array;
  };

  function get_terms_by_post_type($taxonomy, $post_type) {
    global $wpdb;
    $query = $wpdb->prepare(
      "SELECT t.*, COUNT(*) from $wpdb->terms AS t
      INNER JOIN $wpdb->term_taxonomy AS tt ON t.term_id = tt.term_id
      INNER JOIN $wpdb->term_relationships AS r ON r.term_taxonomy_id = tt.term_taxonomy_id
      INNER JOIN $wpdb->posts AS p ON p.ID = r.object_id
      WHERE p.post_type IN('%s') AND tt.taxonomy IN('%s')
      GROUP BY t.term_id",
      $post_type,
      $taxonomy
    );
    $results = $wpdb->get_results($query);
    return $results;
  }

  function basic_gallery($field){
    $images = get_field($field, $p->ID);
    if ( $images ) {
      foreach ($images as $image) {
        $img = array(
          'image' => return_image($image)
        );
        $imgArray[] = $img;
      }
      return $imgArray;
    } else {
      return false;
    }
  }

  function returnGallery($has, $gallery) {
    $has_gallery = get_sub_field($has);
    if ($has_gallery) {
      return basic_gallery($gallery);
    } else {
      return $has_gallery;
    }
  }

  function returnVideo($has, $video) {
    $has_video = get_sub_field($has);
    if ($has_video) {
      return get_sub_field($video);
    } else {
      return $has_video;
    }
  }

  function return_home($url) {
    $end = basename(parse_url($url, PHP_URL_PATH));
    if ($end != "") {
      return false;
    } else {
      return true;
    }
  }

  function all_posts($type){
    $args = array(
      'post_type' => $type,
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

  function return_thumb_url($p) {
    $thumb_id = get_post_thumbnail_id($p);
    $thumb_url_array = wp_get_attachment_image_src($thumb_id, 'thumbnail-size', true);
    $thumb_url = $thumb_url_array[0];
    return $thumb_url;
  }

  function return_null_false($in) {
    if ($in != null || $in != "") {
      return $in;
    } else {
      return false;
    }
  };

  function return_thumb_meta($post) {
    $thumb_id = get_post_thumbnail_id($post);
    $thumb_post = get_post($thumb_id );
    $alt = get_post_meta($thumb_id)['_wp_attachment_image_alt'][0];
    return array (
      'title' =>  $thumb_post->post_title,
      'alt' => return_null_false($alt),
      'caption' => return_null_false($thumb_post->post_excerpt),
      'description' => return_null_false($thumb_post->post_content),
    );
  }
