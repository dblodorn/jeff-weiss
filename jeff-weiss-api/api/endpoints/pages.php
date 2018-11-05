<?php
  // MODULE FOR WORDPRESS PAGES
  function page_data(){
    $pages = get_pages();
    $post_array = array();
    foreach ($pages as $post) {
      $data[] = post_data($post);
    }
    return $data;
  }
?>