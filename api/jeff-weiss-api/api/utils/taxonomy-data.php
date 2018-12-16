<?php
  function taxonomy_data($post) {
    $p = $post->ID;
    return array(
      'category' => return_taxonomy_array($p, 'category'),
    );
  }
?>
