<?php get_header(); /* Template Name: Post Collection */ ?>

<?php if ( have_posts() ) {
  while ( have_posts() ) {
    the_post();
    include locate_template('simple-content.php');
  ?>
<?php }} ?>

<?php get_footer(); ?>