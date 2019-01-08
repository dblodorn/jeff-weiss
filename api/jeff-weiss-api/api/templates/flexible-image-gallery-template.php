<?php

  function simple_slideshow_gallery($images, $style) {
    if ($images) {
      foreach ($images as $image) {
        $img = array(
          'image' => return_image($image),
          'slide_type' => 'image',
          'image_style' => $style
        );
        $imgArray[] = $img;
      }
      return $imgArray;
    } else {
      return false;
    }
  }

  function return_image_grid($images) {
    if ($images) {
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

  function return_simple_slideshow() {
    $images = get_sub_field( 'images' );
    return array (
      'module' => 'simple_slideshow',
      'title' => get_sub_field( 'slideshow_title' ),
      'has_text_overlay' => get_sub_field( 'has_text_overlay'),
      'text_overlay_content' => get_sub_field( 'text_overlay_content'),
      'captions' => get_sub_field( 'captions' ),
      'slides' => simple_slideshow_gallery($images, $style),
    );
  }

  function full_slideshow() {
    $images = array();
    if ( have_rows( 'slides' ) ) :
      while ( have_rows( 'slides' ) ) : the_row();
        $video = get_sub_field( 'video_file' );
        $photo = get_sub_field( 'photo' );
        $images[] = array(
          'image' => return_image($photo),
          'slide_type' => get_sub_field('slide_type'),
          'image_style' => get_sub_field('image_style'),
          'video' => get_sub_field( 'video_file' ),
          'text' => get_sub_field( 'text' ),
          'has_bg_color' => get_sub_field( 'add_background_color' ),
          'bg_color' => get_sub_field( 'background_color' ),
          'text_color' => get_sub_field( 'text_color' ),
          'theme' => get_sub_field( 'theme' ),
        );
      endwhile;
    endif;
    return $images;
  }

  function details_popup() {
    $images = array();
    if ( have_rows( 'details_images' ) ) :
      while ( have_rows( 'details_images' ) ) : the_row();
        $main_img = get_sub_field( 'main_image' );
        $details = get_sub_field( 'details' );
        $images[] = array(
          'image' => return_image($main_img),
          'deatails' => return_image_grid($details)
        );
      endwhile;
    endif;
    return $images;
  }

  function return_slideshow() {
    return array (
      'module' => 'slideshow',
      'title' => get_sub_field( 'slideshow_title' ),
      'has_text_overlay' => get_sub_field( 'slideshow_text_overlay'),
      'text_overlay_content' => get_sub_field( 'slideshow_text_overlay_content'),
      'captions' => get_sub_field( 'captions' ),
      'slides' => full_slideshow(),
    );
  }

  function return_image_grid_popup() {
    $images = get_sub_field( 'images' );
    return array (
      'module' => 'image_grid_popup',
      'thumbnail_proportion' => get_sub_field('image_grid_proportion'),
      'popup_type' => get_sub_field('popup_type'),
      'ig_columns' => get_sub_field('ig_columns'),
      'ig_width' => get_sub_field('ig_width'),
      'image_style' => get_sub_field('image_style'),
      'images' => return_image_grid($images)
    );
  }

  // SINGLE PHOTO / VIDEO MODULE
  function return_single_video_photo() {
    $video_file = get_sub_field( 'video_file' );
    $image = get_sub_field( 'cover_image' );
    return array (
      'module' => 'single_video_photo',
      'title' => get_sub_field('slideshow_title'),
      'video_file' => $video_file,
    );
  }

  // WYSIWIG MODULE
  function return_wysiwig_content() {
    return array (
      'module' => 'wysiwig_content',
      'title' => get_sub_field('slideshow_title'),
      'wysiwig' => get_sub_field('wysiwig'),
      'wysiwig_width' => get_sub_field('wysiwig_width'),
      'wysiwig_position' => get_sub_field('wysiwig_position'),
    );
  }

  // VIDEO GRID MODULE  
  function return_video_list($field) {
    $insert = get_sub_field('insert_type');
    $posts = get_sub_field('video_collection');
    $data = array();
    if($insert == 'all_videos') {
      $data = cpt_videos();
    } else {
      if($posts):    
        foreach( $posts as $p ):
          $p_data = get_post($p->ID);
          $thumb = get_the_post_thumbnail($p);
          $data[] = array(
            'post_id' => $p_data->ID,
            'slug' => $p_data->post_name,
            'title' => get_the_title($p_data),
            'post_type' => $p_data->post_type,
            'thumbnail' => return_thumb_url($p_data),
            'thumbnail_description' =>  return_thumb_meta($p),
            'video_url' => get_field('video_url', $p->ID, false, false),
            'video_cover' => get_field('video_cover_image', $p->ID),
          );
        endforeach;
      endif;
    }
    return $data;
  }

  function return_video_grid($p){
    return array(
      'module' => 'video_grid',
      'columns' => get_sub_field('columns'),
      'display_method' => get_sub_field('display_method'),
      'proportion' => get_sub_field('proportion'),
      'container_width' => get_sub_field('video_grid_width'),
      'video_collection' => return_video_list()
    );
  }

  // Flex Layout Logic
  function flex_content_layout_modules($p){
    $fc_layout_modules = array();
    if( get_field('layout_modules', $p->ID) ):
      while( has_sub_field('layout_modules', $p->ID) ):
        if(get_row_layout() == 'simple_slideshow'):
          $data = return_simple_slideshow();
        elseif(get_row_layout() == 'slideshow'):
          $data = return_slideshow();
        elseif(get_row_layout() == 'image_grid_popup'):
          $data = return_image_grid_popup();
        elseif(get_row_layout() == 'details_popup'):
          $data = return_details_popup();
        elseif(get_row_layout() == 'single_video_photo'):
          $data = return_single_video_photo();
        elseif(get_row_layout() == 'wysiwig_content'):
          $data = return_wysiwig_content();
        elseif(get_row_layout() == 'video_grid'):
          $data = return_video_grid();
        endif;
        $fc_layout_modules[] = $data;
      endwhile;
      return $fc_layout_modules;
    else:
      return false;
    endif;
  }

  function flexible_image_gallery_template($p){
    $flex_layout = get_field('layout_modules', $p->ID);
    return array(
      'layout' => flex_content_layout_modules($p)
    );
  }
?>