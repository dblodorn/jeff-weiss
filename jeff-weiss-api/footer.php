</main>
<footer class="fade-in">
  <article>
    <h3>DAIN M. BLODORN KIM</h3>
    <?php if ( have_rows('footer_links','option') ) : ?>
      <ul class="footer-links">
        <?php while ( have_rows('footer_links','option') ) : the_row(); $link_url = get_sub_field('link_url'); $link_title 	= get_sub_field('link_title'); ?>
          <li>
            <a href="<?php echo $link_url ?>" target="_blank"><?php echo($link_title) ?></a>
          </li>
        <?php endwhile; ?>
      </ul>
    <?php endif; ?>
  </article>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/app.js"></script><?php wp_footer(); ?></body>
</html>