import React from 'react'
import Header from './Components/Header'
import Project from './Components/Project'
import Footer from './Components/Footer'

import { ThemeProvider} from 'styled-components'

const theme = {
  boxSizing: 'border-box',
  font: 'sans-serif',
  textAlign: 'center',
  padding: 0,
  margin: 0
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Project />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
