<?php /*
  Template Name: Flexible Image Gallery
  Template Post Type: post, page, project
*/ ?>

<?php /* Description ACF CODE */?>

<?php /* the_field( 'description' ); */?>

<?php /* Image Gallery ACF CODE */?>

<?php /* if ( have_rows( 'image_gallery' ) ): ?>
	<?php while ( have_rows( 'image_gallery' ) ) : the_row(); ?>
		<?php if ( get_row_layout() == 'slideshow' ) : ?>
			<?php the_sub_field( 'headline' ); ?>
			<?php if ( have_rows( 'slides' ) ) : ?>
				<?php while ( have_rows( 'slides' ) ) : the_row(); ?>
					<?php the_sub_field( 'slide_type' ); ?>
					<?php if ( get_sub_field( 'video_file' ) ) { ?>
						<a href="<?php the_sub_field( 'video_file' ); ?>">Download File</a>
					<?php } ?>
					<?php the_sub_field( 'video_embed' ); ?>
					<?php $photo = get_sub_field( 'photo' ); ?>
					<?php if ( $photo ) { ?>
						<img src="<?php echo $photo['url']; ?>" alt="<?php echo $photo['alt']; ?>" />
					<?php } ?>
					<?php the_sub_field( 'text' ); ?>
					<?php if ( get_sub_field( 'add_background_color' ) == 1 ) { 
					 // echo 'true'; 
					} else { 
					 // echo 'false'; 
					} ?>
					<?php the_sub_field( 'background_color' ); ?>
				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>
		<?php elseif ( get_row_layout() == 'simple_slideshow' ) : ?>
			<?php the_sub_field( 'headline' ); ?>
			<?php $images_images = get_sub_field( 'images' ); ?>
			<?php if ( $images_images ) :  ?>
				<?php foreach ( $images_images as $images_image ): ?>
					<a href="<?php echo $images_image['url']; ?>">
						<img src="<?php echo $images_image['sizes']['thumbnail']; ?>" alt="<?php echo $images_image['alt']; ?>" />
					</a>
				<p><?php echo $images_image['caption']; ?></p>
				<?php endforeach; ?>
			<?php endif; ?>
		<?php elseif ( get_row_layout() == 'single_image_popup' ) : ?>
			<?php the_sub_field( 'headline' ); ?>
			<?php the_sub_field( 'columns' ); ?>
			<?php the_sub_field( 'image_style' ); ?>
			<?php $images_images = get_sub_field( 'images' ); ?>
			<?php if ( $images_images ) :  ?>
				<?php foreach ( $images_images as $images_image ): ?>
					<a href="<?php echo $images_image['url']; ?>">
						<img src="<?php echo $images_image['sizes']['thumbnail']; ?>" alt="<?php echo $images_image['alt']; ?>" />
					</a>
				<p><?php echo $images_image['caption']; ?></p>
				<?php endforeach; ?>
			<?php endif; ?>
			<?php the_sub_field( 'proportion' ); ?>
		<?php elseif ( get_row_layout() == 'slideshow_popup' ) : ?>
			<?php the_sub_field( 'headline' ); ?>
			<?php the_sub_field( 'columns' ); ?>
			<?php the_sub_field( 'image_style' ); ?>
			<?php $images_images = get_sub_field( 'images' ); ?>
			<?php if ( $images_images ) :  ?>
				<?php foreach ( $images_images as $images_image ): ?>
					<a href="<?php echo $images_image['url']; ?>">
						<img src="<?php echo $images_image['sizes']['thumbnail']; ?>" alt="<?php echo $images_image['alt']; ?>" />
					</a>
				<p><?php echo $images_image['caption']; ?></p>
				<?php endforeach; ?>
			<?php endif; ?>
			<?php the_sub_field( 'proportion' ); ?>
		<?php elseif ( get_row_layout() == 'details_popup' ) : ?>
			<?php the_sub_field( 'headline' ); ?>
			<?php the_sub_field( 'columns' ); ?>
			<?php the_sub_field( 'image_style' ); ?>
			<?php if ( have_rows( 'images' ) ) : ?>
				<?php while ( have_rows( 'images' ) ) : the_row(); ?>
					<?php $main_image = get_sub_field( 'main_image' ); ?>
					<?php if ( $main_image ) { ?>
						<img src="<?php echo $main_image['url']; ?>" alt="<?php echo $main_image['alt']; ?>" />
					<?php } ?>
					<?php $details_images = get_sub_field( 'details' ); ?>
					<?php if ( $details_images ) :  ?>
						<?php foreach ( $details_images as $details_image ): ?>
							<a href="<?php echo $details_image['url']; ?>">
								<img src="<?php echo $details_image['sizes']['thumbnail']; ?>" alt="<?php echo $details_image['alt']; ?>" />
							</a>
						<p><?php echo $details_image['caption']; ?></p>
						<?php endforeach; ?>
					<?php endif; ?>
				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>
			<?php the_sub_field( 'proportion' ); ?>
		<?php elseif ( get_row_layout() == 'video_embed' ) : ?>
			<?php the_sub_field( 'headline' ); ?>
			<?php the_sub_field( 'video' ); ?>
			<?php $video_cover_image = get_sub_field( 'video_cover_image' ); ?>
			<?php if ( $video_cover_image ) { ?>
				<img src="<?php echo $video_cover_image['url']; ?>" alt="<?php echo $video_cover_image['alt']; ?>" />
			<?php } ?>
			<?php the_sub_field( 'video_caption' ); ?>
		<?php elseif ( get_row_layout() == 'video_embed_file' ) : ?>
			<?php the_sub_field( 'headline' ); ?>
			<?php $video_file = get_sub_field( 'video_file' ); ?>
			<?php if ( $video_file ) { ?>
				<a href="<?php echo $video_file['url']; ?>"><?php echo $video_file['filename']; ?></a>
			<?php } ?>
			<?php $video_cover_image = get_sub_field( 'video_cover_image' ); ?>
			<?php if ( $video_cover_image ) { ?>
				<img src="<?php echo $video_cover_image['url']; ?>" alt="<?php echo $video_cover_image['alt']; ?>" />
			<?php } ?>
			<?php the_sub_field( 'video_caption' ); ?>
		<?php endif; ?>
	<?php endwhile; ?>
<?php else: ?>
	<?php // no layouts found ?>
<?php endif; */?>