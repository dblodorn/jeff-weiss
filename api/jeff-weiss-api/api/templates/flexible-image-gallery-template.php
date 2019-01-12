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

  // SINGLE PHOTO / VIDEO MODULE
  function return_single_video_photo() {
    $video_file = get_sub_field( 'video_file' );
    return array (
      'module' => 'single_video_photo',
      'title' => get_sub_field('slideshow_title'),
      'video_file' => $video_file,
    );
  }

  function return_zoom_image() {
    return array (
      'module' => 'zoom_image',
      'title' => get_sub_field('zoom_title'),
      'image' => get_sub_field('zoom_image'),
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

  // Flex Layout Logic
  function flex_content_layout_modules($p){
    $fc_layout_modules = array();
    if( get_field('layout_modules', $p->ID) ):
      while( has_sub_field('layout_modules', $p->ID) ):
        if(get_row_layout() == 'simple_slideshow'):
          $data = return_simple_slideshow();
        elseif(get_row_layout() == 'single_video_photo'):
          $data = return_single_video_photo();
        elseif(get_row_layout() == 'wysiwig_content'):
          $data = return_wysiwig_content();
        elseif(get_row_layout() == 'zoom_image'):
          $data = return_zoom_image();
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