import { ThemeProvider } from "styled-components";

import { Header, Footer, Projects } from "./components";

export const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
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
