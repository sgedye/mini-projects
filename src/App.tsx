// import { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";

import { Header, Footer, Projects } from "./components";
// import FilterButtons from './components'

export const App: React.FC<{}> = () => {
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
  );
};

const theme = {
  boxSizing: "border-box",
  font: "sans-serif",
  textAlign: "center",
  padding: 0,
  margin: 0,
};
