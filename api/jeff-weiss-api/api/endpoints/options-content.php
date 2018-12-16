<?php
  // MODULE FOR ACF OPTIONS CONTENT
  function intConvert($in) {
    $num = $in;
    return (int)$num;
  }

  function toRem($in) {
    $rem = 'rem';
    $val = $in;
    return $val.$rem;
  }
  
  function return_breakpoints() {
    $breakpoints = array();
    if ( have_rows( 'breakpoints', 'option' ) ) :
      while ( have_rows( 'breakpoints', 'option' ) ) : the_row();
        $breakpoints = array(
          'small' => intConvert(get_sub_field( 'small' )),
          'medium' => intConvert(get_sub_field( 'medium' )),
          'desktop_navigation' => intConvert(get_sub_field( 'desktop_navigation' )),
          'large' => intConvert(get_sub_field( 'large' )),
          'jumbo' => intConvert(get_sub_field( 'jumbo' )),
        );
      endwhile;
    endif;
    return $breakpoints;
  }

  function return_heights() {
    $heights = array();
    if ( have_rows( 'heights', 'option' ) ) :
      while ( have_rows( 'heights', 'option' ) ) : the_row();
        $heights = array(
          'header' => toRem(get_sub_field( 'header' )),
          'mobile_header' => toRem(get_sub_field( 'mobile_header' )),
          'footer' => toRem(get_sub_field( 'footer' )),
          'footer_mobile' => toRem(get_sub_field( 'footer_mobile' )),
        );
      endwhile;
    endif;
    return $heights;
  }

  function return_spacing() {
    $spacing = array();
    if ( have_rows( 'spacing', 'option' ) ) :
      while ( have_rows( 'spacing', 'option' ) ) : the_row();
        $spacing = array(
          'single_pad' => toRem(get_sub_field( 'single_pad' )),
          'double_pad' => toRem(get_sub_field( 'double_pad' )),
          'big_pad' => toRem(get_sub_field( 'big_pad' )),
          'micro_pad' => toRem(get_sub_field( 'micro_pad' )),
        );
      endwhile;
    endif;
    return $spacing;
  }

  function return_fonts() {
    $fonts = array();
    if ( have_rows( 'fonts', 'option' ) ) :
      while ( have_rows( 'fonts', 'option' ) ) : the_row();
        $fonts = array(
          'display_font_a' => get_sub_field( 'display_font_a' ),
          'display_font_b' => get_sub_field( 'display_font_b' ),
          'body_copy_font_a' => get_sub_field( 'body_copy_font_a' ),
          'body_copy_font_b' => get_sub_field( 'body_copy_font_b' ),
        );
      endwhile;
    endif;
    return $fonts;
  }

  function return_font_sizes() {
    $font_sizes = array();
    if ( have_rows( 'font_sizes', 'option' ) ) :
      while ( have_rows( 'font_sizes', 'option' ) ) : the_row();
        $font_sizes = array(
          'giant' => get_sub_field( 'giant' ),
          'giant_mobile' => get_sub_field( 'giant_mobile' ),
          'large' => get_sub_field( 'large' ),
          'large_mobile' => get_sub_field( 'large_mobile' ),
          'medium' => get_sub_field( 'medium' ),
          'medium_mobile' => get_sub_field( 'medium_mobile' ),
          'regular' => get_sub_field( 'regular' ),
          'regular_mobile' => get_sub_field( 'regular_mobile' ),
          'small' => get_sub_field( 'small' ),
          'small_mobile' => get_sub_field( 'small_mobile' ),
          'micro' => get_sub_field( 'micro' ),
          'micro_mobile' => get_sub_field( 'micro_mobile' ),
        );
      endwhile;
    endif;
    return $font_sizes;
  }

  function return_font_tag_size_assignment_a() {
    $font_tag_size_assignment_a = array();
    if ( have_rows( 'font_tag_size_assignment_a', 'option' ) ) :
      while ( have_rows( 'font_tag_size_assignment_a', 'option' ) ) : the_row();
        $font_tag_size_assignment_a = array(
          'h1_a' => get_sub_field( 'h1_a' ),
          'h2_a' => get_sub_field( 'h2_a' ),
          'h3_a' => get_sub_field( 'h3_a' ),
          'h4_a' => get_sub_field( 'h4_a' ),
          'h5_a' => get_sub_field( 'h5_a' ),
          'h6_a' => get_sub_field( 'h6_a' ),
          'p_a' => get_sub_field( 'p_a' ),
          'menu_link_a' => get_sub_field( 'menu_link_a' ),
          'button_link_a' => get_sub_field( 'button_link_a' ),
        );
      endwhile;
    endif;
    return $font_tag_size_assignment_a;
  }

  function return_font_tag_size_assignment_b() {
    $font_tag_size_assignment_b = array();
    if ( have_rows( 'font_tag_size_assignment_b', 'option' ) ) :
      while ( have_rows( 'font_tag_size_assignment_b', 'option' ) ) : the_row();
        $font_tag_size_assignment_b = array(
          'h1_b' => get_sub_field( 'h1_b' ),
          'h2_b' => get_sub_field( 'h2_b' ),
          'h3_b' => get_sub_field( 'h3_b' ),
          'h4_b' => get_sub_field( 'h4_b' ),
          'h5_b' => get_sub_field( 'h5_b' ),
          'h6_b' => get_sub_field( 'h6_b' ),
          'p_b' => get_sub_field( 'p_b' ),
          'menu_link_b' => get_sub_field( 'menu_link_b' ),
          'button_link_b' => get_sub_field( 'button_link_b' ),
        );
      endwhile;
    endif;
    return $font_tag_size_assignment_b;
  }

  function return_color_assignment_a() {
    $color_assignment_a = array();
    if ( have_rows( 'color_assignment_a', 'option' ) ) :
      while ( have_rows( 'color_assignment_a', 'option' ) ) : the_row();
        $color_assignment_a = array(
          'headline_color_a' => get_sub_field( 'headline_color_a' ),
          'text_color_a' => get_sub_field( 'text_color_a' ),
          'background_color_a' => get_sub_field( 'background_color_a' ),
          'page_background_color_a' => get_sub_field( 'page_background_color_a' ),
        );
      endwhile;
    endif;
    return $color_assignment_a;
  }

  function return_color_assignment_b() {
    $color_assignment_b = array();
    if ( have_rows( 'color_assignment_b', 'option' ) ) :
      while ( have_rows( 'color_assignment_b', 'option' ) ) : the_row();
        $color_assignment_b = array(
          'headline_color_b' => get_sub_field( 'headline_color_b' ),
          'text_color_b' => get_sub_field( 'text_color_b' ),
          'background_color_b' => get_sub_field( 'background_color_b' ),
          'page_background_color_b' => get_sub_field( 'page_background_color_b' ),
        );
      endwhile;
    endif;
    return $color_assignment_b;
  }

  function options_data(){
    return array(
      'site_styles' => array(
        'breakpoints' => return_breakpoints(),
        'heights' => return_heights(),
        'spacing' => return_spacing(),
        'fonts' => return_fonts(),
        'font_sizes' => return_font_sizes(),
        'theme_a' => array(
          'font_tag_sizes' => return_font_tag_size_assignment_a(),
          'color_assignment' => return_color_assignment_a()
        ),
        'theme_b' => array(
          'font_tag_sizes' => return_font_tag_size_assignment_b(),
          'color_assignment' => return_color_assignment_b()
        ),
      ),
    );
  }
?>
