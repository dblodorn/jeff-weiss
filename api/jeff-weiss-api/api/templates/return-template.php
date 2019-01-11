<?php
  require_once( 'post-collection-template.php');
  require_once( 'flexible-image-gallery-template.php');
  function return_template($template) {
    $template_name = null;
    if ($template == 'template-post-collection.php') {
      $template_name = 'post-collection';
    } else if ($template == 'template-flexible-image-gallery.php') {
      $template_name = 'flexible-image-gallery';
    } else {
      $template_name = 'default';
    }
    return $template_name;
  }
  function template_data($template_name, $p) {
    $content = false;
    if ($template_name == 'post-collection') {
      $content = post_collection_template($p);
    } else if ($template_name == 'flexible-image-gallery') {
      $content = flexible_image_gallery_template($p);
    } else {
      $content = flexible_image_gallery_template($p);
    }
    return $content;
  }
?>