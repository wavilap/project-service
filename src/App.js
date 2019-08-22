import React, { Fragment } from 'react'
import { GlobalStyle } from './GlobalStyles'

import { Layout }  from './components/Layout'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout />
    </Fragment>
  );
}

export default App;
