import React from "react";
import Providers from "contexts/Providers";
import Routes from "./routes";
import GlobalStyled from "assets/styles/globalStyled";

function App() {
  return (
    <>
      <Providers>
        <Routes />
      </Providers>
      <GlobalStyled />
    </>
  );
}

export default App;
