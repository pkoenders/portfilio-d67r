import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { themeBase } from '/src/themes/default/themeBase'
import { themeBaseColors } from '/src/themes/default/themeBaseColors'
import { light } from '/src/themes/default/themeLightDark'

const _ = require('lodash')
export const mergedThemes = _.merge(light, themeBase, themeBaseColors)
export const theme = mergedThemes
export const screenSize = theme.screens

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box; 
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.sans};

    // Base font sizing
    // font-size: 100%; /* 16px */
     font-size: 106.3%; /* 17px */
    //font-size: 112.5%; /* 18px */

    color: ${({ theme }) => theme.colors.page.default};
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
    font-kerning: normal;
  }

  body {
    line-height: 1.75;
    letter-spacing: ${({ theme }) => theme.letterSpacing.normal};
  }  

  @media print {  
    * { 
      overflow: visible;
    }

    html, body {
      width: 210mm;
      height: 297mm;
    }

    header {
      position: relative !important;
      -webkit-print-color-adjust: exact;
    }

    main {
      margin: 11mm 0;   
      overflow: hidden;   
    }

    div, li, a {
      break-inside: avoid;
    }

    footer {
      position: fixed;
      bottom: 0;
    }
  }

  .hide {
    display: none;
  }

  .sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
  
  section.light {
    color: ${({ theme }) => theme.colors.pageHold.default};
    .carousel > * {
      color: ${({ theme }) => theme.colors.pageHold.default};
    }
  }

   
  section.dark {
    color: ${({ theme }) => theme.colors.pageHold[100]};

  
    
    a {
       /* color: ${({ theme }) => theme.colors.primary[100]}; */
    }

    form {
      input:focus-visible,
      textarea:focus-visible,
      select:focus-visible {
        outline: 3px dotted ${({ theme }) => theme.colors.focusVisibleOnDark} !important;
      }
      label,
      legend,
      .submitForm {
        .required,
        .requiredCheck {
          color: ${({ theme }) => theme.colors.primary[100]};
        }
        .error {
          color: ${({ theme }) => theme.colors.alert.tomato};
        }
      }
    }
  }

  a,
  a:link,
  a:hover,
  a:visited {
    color: ${({ theme }) => theme.colors.accent.default};
    /* text-decoration: none; */
    text-decoration: underline;
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow-wrap: anywhere;
    /* hyphens: auto; */
  }

  a:hover {
    text-decoration: underline;
  }

  .visit {
    text-decoration: none !important;
    border-bottom: 1px solid transparent !important;
  }

  .visit:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent.default} !important;
  }


  /* a:focus,
  button {
    outline: none;
  } */

  *:focus,
  *:focus-visible {
    /* background-color: ${({ theme }) => theme.colors.accent[100]};   */
    outline: 3px solid ${({ theme }) => theme.colors.focusVisible} !important;  
  }

  .dark,
  header,
  .secondaryNav,
  footer {
    *:focus,
    *:focus-visible {
      outline: 3px dotted ${({ theme }) => theme.colors.focusVisibleOnDark} !important; 
    }
  }

   *:focus:not(:focus-visible) {
    outline: none !important;
  }


  .marginTopInital {
    margin-top:0 !important;
  }
  .paddingTopInital {
    padding-top:0 !important;
  }

  .marginTopHeader {
    margin-top:0 ${({ theme }) => theme.header.height} !important;
  }

  [data-rmiz-overlay='true'] {
    background-color: ${({ theme }) => theme.colors.header.default} !important;
  }

  
  h1, .styledh1, h2, .styledh2, h3, .styledh3, h4, .styledh4, h5, .styledh5, h6, .styledh6 {
    line-height: 1.3;
  } 
  
  h1,
  .styledh1 {
    font-size: ${({ theme }) => theme.fontSize['5xl']};
    font-family: ${({ theme }) => theme.font.headers};
    /* line-height: ${({ theme }) => theme.lineHeight.tight}; */
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  h2,
  .styledh2 {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    font-family: ${({ theme }) => theme.font.headers};
    /* line-height: ${({ theme }) => theme.lineHeight.tight}; */
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }

  h3,
  .styledh3 {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.font.sans};
     font-weight: ${({ theme }) => theme.fontWeight.semibold};
    /* line-height: ${({ theme }) => theme.lineHeight.snug}; */
  }

  h4,
  .styledh4 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    /* line-height: ${({ theme }) => theme.lineHeight.snug}; */
  }
  
  h5,
  .styledh5 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: ${({ theme }) => theme.font.sans};
    /* line-height: ${({ theme }) => theme.lineHeight.snug}; */
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  h6,
  .styledh6 {
     font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: ${({ theme }) => theme.font.sans};
    /* line-height: ${({ theme }) => theme.lineHeight.snug}; */
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    h1,
    .styledh1 {
      font-size: ${({ theme }) => theme.fontSize['4xl']};
    }

    h2,
    .styledh2 {
      font-size: ${({ theme }) => theme.fontSize['3xl']};
    }

    h3,
    .styledh3 {
      font-size: ${({ theme }) => theme.fontSize['xl']};
    }

    h4,
    .styledh4 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    h5,
    .styledh5 {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    h6,
    .styledh6 {
       font-size: ${({ theme }) => theme.fontSize.lg};
    }

  }

  p {
    font-family: ${({ theme }) => theme.font.sans};
    margin-bottom: ${({ theme }) => theme.spacing['3']};
   
    em {
      font-style: italic;
    }
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
 

  ul, ol {
    margin-left: 1.45em;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45em;
    list-style-position: outside;
    list-style-image: none;
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45em;
  }

  dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45em;
  }

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }

  figure {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45em;
  }

  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1.45em;
    font-size: 0.85em;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45em;
  }


  button {
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.page.default};
    background-color: transparent;  
    /* outline: none; */
    border:none;
  }


  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 0;
  }

  // Section - Slice widths for Homepage and General page
  .section-layout {
    > div {
      margin: 0 auto;
      /* padding-bottom: ${({ theme }) => theme.padding['1/2']}; */
        }
  }

  .section-layout.skinny {
    > div {
      max-width: ${({ theme }) => theme.screens.xs}; 
    }
  }

  .section-layout.slim {
    > div {
      max-width: ${({ theme }) => theme.screens.sm}; 
    }
  }

  .section-layout.default {
    > div {
      max-width: ${({ theme }) => theme.screens.md}; 
    }
  }

  .section-layout.large {
    > div {
      max-width: ${({ theme }) => theme.screens.lg}; 
    }
  }

  .section-layout.wide {
    > div {
      max-width: ${({ theme }) => theme.screens.xl}; 
    }
  }

  .section-layout.extraWide {
    > div {
      max-width: ${({ theme }) => theme.screens.xxl}; 
    }
  }

  .section-layout.full {
    > div {
      margin: 0 0;
      max-width: ${({ theme }) => theme.screens.full}; 
    }
  }

  .section-layout.form {
    padding: 0 ${({ theme }) => theme.padding['1/2']};
  }

  // Bground color options
  // Default
  // Grey 

  /* [class^="background-page"],
  [class*=" background-page"]{
    background-color: ${({ theme }) => theme.colors.page.bground.default}; 
  } */

   //
   // Page
  .background-page-default {
    /* background-color: ${({ theme }) => theme.colors.page.bground.default};  */
  }
  .background-page-100 {
    background-color: ${({ theme }) => theme.colors.page[100]}; 
  }
  .background-page-200 {
    background-color: ${({ theme }) => theme.colors.page[200]}; 
  }
  .background-page-300 {
    background-color: ${({ theme }) => theme.colors.page[300]}; 
  }
  .background-page-400 {
    background-color: ${({ theme }) => theme.colors.page[400]}; 
  }
  .background-page-500 {
    background-color: ${({ theme }) => theme.colors.page[500]}; 
  }
  .background-page-600 {
    background-color: ${({ theme }) => theme.colors.page[600]}; 
  }
  .background-page-700 {
    background-color: ${({ theme }) => theme.colors.page[700]}; 
  }
  .background-page-800 {
    background-color: ${({ theme }) => theme.colors.page[800]}; 
  }
  .background-page-900 {
    background-color: ${({ theme }) => theme.colors.page[900]}; 
  }
  //
  // Primary
  .background-primary-default {
    background-color: ${({ theme }) => theme.colors.primary.default}; 
  }

  .background-primary-100 {
    background-color: ${({ theme }) => theme.colors.primary[100]}; 
  }
  .background-primary-200 {
    background-color: ${({ theme }) => theme.colors.primary[200]}; 
  }
  .background-primary-300 {
    background-color: ${({ theme }) => theme.colors.primary[300]}; 
  }
  .background-primary-400 {
    background-color: ${({ theme }) => theme.colors.primary[400]}; 
  }
  .background-primary-500 {
    background-color: ${({ theme }) => theme.colors.primary[500]}; 
  }
  .background-primary-600 {
    background-color: ${({ theme }) => theme.colors.primary[600]}; 
  }
  .background-primary-700 {
    background-color: ${({ theme }) => theme.colors.primary[700]}; 
  }
  .background-primary-800 {
    background-color: ${({ theme }) => theme.colors.primary[800]}; 
  }
  .background-primary-900 {
    background-color: ${({ theme }) => theme.colors.primary[900]}; 
  }
  .background-primary-1100 {
    background-color: ${({ theme }) => theme.colors.primary[1100]}; 
  }
  .background-primary-1200 {
    background-color: ${({ theme }) => theme.colors.primary[1200]}; 
  }
  .background-primary-1300 {
    background-color: ${({ theme }) => theme.colors.primary[1300]}; 
  }
  //
  // Secondary
  .background-secondary-default {
    background-color: ${({ theme }) => theme.colors.secondary.default}; 
  }
  .background-secondary-100 {
    background-color: ${({ theme }) => theme.colors.secondary[100]}; 
  }
  .background-secondary-200 {
    background-color: ${({ theme }) => theme.colors.secondary[200]}; 
  }
  .background-secondary-300 {
    background-color: ${({ theme }) => theme.colors.secondary[300]}; 
  }
  .background-secondary-400 {
    background-color: ${({ theme }) => theme.colors.secondary[400]}; 
  }
  .background-secondary-500 {
    background-color: ${({ theme }) => theme.colors.secondary[500]}; 
  }
  .background-secondary-600 {
    background-color: ${({ theme }) => theme.colors.secondary[600]}; 
  }
  .background-secondary-700 {
    background-color: ${({ theme }) => theme.colors.secondary[700]}; 
  }
  .background-secondary-800 {
    background-color: ${({ theme }) => theme.colors.secondary[800]}; 
  }
  .background-secondary-900 {
    background-color: ${({ theme }) => theme.colors.secondary[900]}; 
  }
  .background-secondary-1100 {
    background-color: ${({ theme }) => theme.colors.secondary[1100]}; 
  }
  .background-secondary-1200 {
    background-color: ${({ theme }) => theme.colors.secondary[1200]}; 
  }
  .background-secondary-1300 {
    background-color: ${({ theme }) => theme.colors.secondary[1300]}; 
  }
  //
  // Tertiary
  .background-tertiary-default {
    background-color: ${({ theme }) => theme.colors.tertiary.default}; 
  }
  .background-tertiary-100 {
    background-color: ${({ theme }) => theme.colors.tertiary[100]}; 
  }
  .background-tertiary-200 {
    background-color: ${({ theme }) => theme.colors.tertiary[200]}; 
  }
  .background-tertiary-300 {
    background-color: ${({ theme }) => theme.colors.tertiary[300]}; 
  }
  .background-tertiary-400 {
    background-color: ${({ theme }) => theme.colors.tertiary[400]}; 
  }
  .background-tertiary-500 {
    background-color: ${({ theme }) => theme.colors.tertiary[500]}; 
  }
  .background-tertiary-600 {
    background-color: ${({ theme }) => theme.colors.tertiary[600]}; 
  }
  .background-tertiary-700 {
    background-color: ${({ theme }) => theme.colors.tertiary[700]}; 
  }
  .background-tertiary-800 {
    background-color: ${({ theme }) => theme.colors.tertiary[800]}; 
  }
  .background-tertiary-900 {
    background-color: ${({ theme }) => theme.colors.tertiary[900]}; 
  }
  .background-tertiary-1100 {
    background-color: ${({ theme }) => theme.colors.tertiary[1100]}; 
  }
  .background-tertiary-1200 {
    background-color: ${({ theme }) => theme.colors.tertiary[1200]}; 
  }
  .background-tertiary-1300 {
    background-color: ${({ theme }) => theme.colors.tertiary[1300]}; 
  }
  //
  // Grey 
  .background-grey-default{
    background-color: ${({ theme }) => theme.colors.grey.default}; 
  }
  .background-grey-100 {
    background-color: ${({ theme }) => theme.colors.grey[100]}; 
  }
  .background-grey-200 {
    background-color: ${({ theme }) => theme.colors.grey[200]}; 
  }
  .background-grey-300 {
    background-color: ${({ theme }) => theme.colors.grey[300]}; 
  }
  .background-grey-400 {
    background-color: ${({ theme }) => theme.colors.grey[400]}; 
  }
  .background-grey-500 {
    background-color: ${({ theme }) => theme.colors.grey[500]}; 
  }
  .background-grey-600 {
    background-color: ${({ theme }) => theme.colors.grey[600]}; 
  }
  .background-grey-700 {
    background-color: ${({ theme }) => theme.colors.grey[700]}; 
  }
  .background-grey-800 {
    background-color: ${({ theme }) => theme.colors.grey[800]}; 
  }
  .background-grey-900 {
    background-color: ${({ theme }) => theme.colors.grey[900]}; 
  }
  .background-grey-1100 {
    background-color: ${({ theme }) => theme.colors.grey[1100]}; 
  }
  .background-grey-1200 {
    background-color: ${({ theme }) => theme.colors.grey[1200]}; 
  }
  .background-grey-1300 {
    background-color: ${({ theme }) => theme.colors.grey[1300]}; 
  }
  //
  // Cards 
  .background-card-default{
    background-color: ${({ theme }) => theme.colors.card.default}; 
  }
  .background-card-100 {
    background-color: ${({ theme }) => theme.colors.card[100]}; 
  }
  .background-card-200 {
    background-color: ${({ theme }) => theme.colors.card[200]}; 
  }
  .background-card-300 {
    background-color: ${({ theme }) => theme.colors.card[300]}; 
  }
  .background-card-400 {
    background-color: ${({ theme }) => theme.colors.card[400]}; 
  }
  .background-card-500 {
    background-color: ${({ theme }) => theme.colors.card[500]}; 
  }
  .background-card-600 {
    background-color: ${({ theme }) => theme.colors.card[600]}; 
  }
  .background-card-700 {
    background-color: ${({ theme }) => theme.colors.card[700]}; 
  }
  .background-card-800 {
    background-color: ${({ theme }) => theme.colors.card[800]}; 
  }
  .background-card-900 {
    background-color: ${({ theme }) => theme.colors.card[900]}; 
  }
  //
  // Header 
  .background-header-default{
    background-color: ${({ theme }) => theme.colors.header.default}; 
  }
  .background-header-100 {
    background-color: ${({ theme }) => theme.colors.header[100]}; 
  }
  .background-header-200 {
    background-color: ${({ theme }) => theme.colors.header[200]}; 
  }
  .background-header-300 {
    background-color: ${({ theme }) => theme.colors.header[300]}; 
  }
  .background-header-400 {
    background-color: ${({ theme }) => theme.colors.header[400]}; 
  }
  .background-header-500 {
    background-color: ${({ theme }) => theme.colors.header[500]}; 
  }
  .background-header-600 {
    background-color: ${({ theme }) => theme.colors.header[600]}; 
  }
  .background-header-700 {
    background-color: ${({ theme }) => theme.colors.header[700]}; 
  }
  .background-header-800 {
    background-color: ${({ theme }) => theme.colors.header[800]}; 
  }
  .background-header-900 {
    background-color: ${({ theme }) => theme.colors.header[900]}; 
  }
  .background-header-1100 {
    background-color: ${({ theme }) => theme.colors.header[1100]}; 
  }
  .background-header-1200 {
    background-color: ${({ theme }) => theme.colors.header[1200]}; 
  }
  .background-header-1300 {
    background-color: ${({ theme }) => theme.colors.header[1300]}; 
  }
   //
  // Footer 
  .background-footer-default{
    background-color: ${({ theme }) => theme.colors.footer.default}; 
  }
  .background-footer-100 {
    background-color: ${({ theme }) => theme.colors.footer[100]}; 
  }
  .background-footer-200 {
    background-color: ${({ theme }) => theme.colors.footer[200]}; 
  }
  .background-footer-300 {
    background-color: ${({ theme }) => theme.colors.footer[300]}; 
  }
  .background-footer-400 {
    background-color: ${({ theme }) => theme.colors.footer[400]}; 
  }
  .background-footer-500 {
    background-color: ${({ theme }) => theme.colors.footer[500]}; 
  }
  .background-footer-600 {
    background-color: ${({ theme }) => theme.colors.footer[600]}; 
  }
  .background-footer-700 {
    background-color: ${({ theme }) => theme.colors.footer[700]}; 
  }
  .background-footer-800 {
    background-color: ${({ theme }) => theme.colors.footer[800]}; 
  }
  .background-footer-900 {
    background-color: ${({ theme }) => theme.colors.footer[900]}; 
  }
  .background-footer-1100 {
    background-color: ${({ theme }) => theme.colors.footer[1100]}; 
  }
  .background-footer-1200 {
    background-color: ${({ theme }) => theme.colors.footer[1200]}; 
  }
  .background-footer-1300 {
    background-color: ${({ theme }) => theme.colors.footer[1300]}; 
  }
  //
  // Alerts 
  // Tomato
  .background-alert-tomato{
    background-color: ${({ theme }) => theme.colors.alert.tomato}; 
  }
  // Level 1
  .background-alert-l1-default{
    background-color: ${({ theme }) => theme.colors.alert.l1.default}; 
  }
  .background-alert-l1-1100 {
    background-color: ${({ theme }) => theme.colors.alert.l1[1100]}; 
  }
  .background-alert-l1-1200 {
    background-color: ${({ theme }) => theme.colors.alert.l1[1200]}; 
  }
  .background-alert-l1-1300 {
    background-color: ${({ theme }) => theme.colors.alert.l1[1300]}; 
  }
  // Level 2
  .background-alert-l2-default{
    background-color: ${({ theme }) => theme.colors.alert.l2.default}; 
  }
  .background-alert-l2-1100 {
    background-color: ${({ theme }) => theme.colors.alert.l2[1100]}; 
  }
  .background-alert-l2-1200 {
    background-color: ${({ theme }) => theme.colors.alert.l2[1200]}; 
  }
  .background-alert-l2-1300 {
    background-color: ${({ theme }) => theme.colors.alert.l2[1300]}; 
  }
  // Level 3
  .background-alert-l3-default{
    background-color: ${({ theme }) => theme.colors.alert.l3.default}; 
  }
  .background-alert-l3-1100 {
    background-color: ${({ theme }) => theme.colors.alert.l3[1100]}; 
  }
  .background-alert-l3-1200 {
    background-color: ${({ theme }) => theme.colors.alert.l3[1200]}; 
  }
  .background-alert-l3-1300 {
    background-color: ${({ theme }) => theme.colors.alert.l3[1300]}; 
  }
  // Level 4
  .background-alert-l4-default{
    background-color: ${({ theme }) => theme.colors.alert.l4.default}; 
  }
  .background-alert-l4-1100 {
    background-color: ${({ theme }) => theme.colors.alert.l4[1100]}; 
  }
  .background-alert-l4-1200 {
    background-color: ${({ theme }) => theme.colors.alert.l4[1200]}; 
  }
  .background-alert-l4-1300 {
    background-color: ${({ theme }) => theme.colors.alert.l4[1300]}; 
  }
  // Level 1
  .background-alert-l5-default{
    background-color: ${({ theme }) => theme.colors.alert.l5.default}; 
  }
  .background-alert-l5-1100 {
    background-color: ${({ theme }) => theme.colors.alert.l5[1100]}; 
  }
  .background-alert-l5-1200 {
    background-color: ${({ theme }) => theme.colors.alert.l5[1200]}; 
  }
  .background-alert-l5-1300 {
    background-color: ${({ theme }) => theme.colors.alert.l5[1300]}; 
  }

`
