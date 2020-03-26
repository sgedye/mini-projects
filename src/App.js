import React from 'react'
import Header from './Components/Header'
import Projects from './Components/Projects'
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
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
