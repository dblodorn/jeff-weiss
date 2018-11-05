<?php /* Template Name: Post Collection */ ?>

<?php $post_collection = get_field( 'post_collection' ); ?>
<?php if ( $post_collection ): ?>
	<?php foreach ( $post_collection as $post ):  ?>
		<?php setup_postdata ( $post ); ?>
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
	<?php endforeach; ?>
<?php wp_reset_postdata(); ?>
<?php endif; ?>