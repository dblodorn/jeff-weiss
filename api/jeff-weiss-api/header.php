<?php $directory = get_template_directory_uri(); ?>

<!DOCTYPE html><html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title><?php bloginfo('name') ?> | API</title>
  <?php wp_head(); ?>
  <style type="text/css">
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block
    }

    body {
      line-height: 1
    }

    ol,
    ul {
      list-style: none
    }

    blockquote,
    q {
      quotes: none
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none
    }

    table {
      border-collapse: collapse;
      border-spacing: 0
    }

    ol,
    ul {
      list-style: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    a {
      -webkit-margin-before: 0;
      -webkit-margin-after: 0;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
    }

    html {
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
    }

    body {
      font-size: 16px;
      overflow-x: hidden;
      width: 100vw;
      min-height: 100vh;
      margin: 0;
      background-color: transparent;
    }

    * {
      box-sizing: border-box;
      outline: 0;
    }
  </style>
  <link href="<?php echo $directory; ?>/main.css" rel="stylesheet"/>
</head>
<body>
  <header>
    <h1><?php bloginfo('name') ?> | API</h1>
  </header>