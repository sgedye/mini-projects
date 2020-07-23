import React from 'react'
// import { useState, useEffect } from 'react'
import Header from './Components/Header'
// import FilterButtons from './Components/FilterButtons'
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
  // const [selector, setSelector] = useState("all")
  
  // console.log(selector)
  // useEffect(() => {
  //   // effect
  //   console.log(selector)
  //   return () => {
  //     // cleanup
  //   }
  // }, [selector])

  // const handleSelector = e => {
  //   e.preventDefault()
  //   console.log(e.target, e.target.value)
  //   setSelector('hi')
  // }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <FilterButtons setSelector={setSelector} /> */}
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
