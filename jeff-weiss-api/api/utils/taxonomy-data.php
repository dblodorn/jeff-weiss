<?php
  function taxonomy_data($post) {
    $p = $post->ID;
    return array(
      'category' => return_taxonomy_array($p, 'category'),
      'capabilities' => return_taxonomy_array($p, 'capability'),
      'client' => return_taxonomy_array($p, 'client'),
      'industry' => return_taxonomy_array($p, 'industry'),
      'instagram_tag' => return_taxonomy_array($p, 'instagram_tag'),
    );
  }
?>
