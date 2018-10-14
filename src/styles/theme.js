import { store } from './../state/store'
import { heights, spacing, fonts, colors, shared, breakpoints } from './theme.json'
import defaults from './defaults.json'

// Theme
export const themeA = {
  header_color: colors.display_font_a_color,
  top_bg_color: colors.white,
  pad_wrapper: colors.white,
  logo_color: colors.logo_color_a,
  display_font_color: colors.display_font_a_color,
  display_font: fonts.display_font_a,
  body_copy_font: fonts.body_copy_font_a,
  body_copy_color: fonts.body_font_a_color,
  popup_bg_color: colors.popup_bg_color_a,
  popup_close_color: colors.popup_close_color_a,
  display_case: 'uppercase',
  default_link: {
    color: colors.black,
    hover: colors.green,
    font: fonts.display_font_a,
    weight: 600,
    size: {
      mobile: fonts.med,
      desktop: fonts.med_medium
    },
    case: 'uppercase'
  }
}

export const themeB = {
  header_color: colors.display_font_b_color,
  top_bg_color: colors.black,
  pad_wrapper: colors.black,
  logo_color: colors.logo_color_b,
  display_font_color: colors.display_font_b_color,
  display_font: fonts.display_font_b,
  body_copy_font: fonts.body_copy_font_b,
  body_copy_color: fonts.body_font_b_color,
  popup_bg_color: colors.popup_bg_color_b,
  popup_close_color: colors.popup_close_color_b,
  display_case: 'capitalize',
  default_link: {
    color: colors.white,
    hover: colors.black,
    font: fonts.authentic,
    weight: 300,
    size: {
      mobile: fonts.sm,
      desktop: fonts.sm_medium
    },
    case: 'lowercase'
  }
}

export const themes = {
  'a': themeA,
  'b': themeB
}
