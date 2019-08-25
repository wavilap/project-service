import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 1.5;
    font-synthesis: none;
    color: #4c4c4c;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  div,
  header,
  nav,
  section,
  article,
  aside,
  footer,
  figure {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  p {
    font-size: 0.875rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
    background-color: transparent;

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  ul {
    list-style-type: none;
  }

  label,
  input,
  select,
  textarea,
  button {
    font-size: 0.875rem;
    color: #4c4c4c;
  }

  textarea {
    height: auto !important;
    resize: none;
  }
  
  .container {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding-left: .5rem;
    padding-right: .5rem;
  }

  .column {
    padding-left: .5rem;
    padding-right: .5rem;
  }

  .row {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-left: -.75rem;
    margin-right: -.75rem;
  }

  .column {
    padding-left: .75rem;
    padding-right: .75rem;
  }

  .one-third {
    width: 33.333%;
    padding-left: .75rem;
    padding-right: .75rem;
    margin-bottom: 1rem;
  }

  .serviceWrap {
    width: 65%;
  }

  .formWrap {
    width: 35%;
  }
`