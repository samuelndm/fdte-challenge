import React from "react";
import NotificationProvider from "./NotificationProvider";
import PokemonsBag from "./PokemonsBag";
import CurrentPokemonProvider from "./CurrentPokemonProvider";

const Providers = ({ children }) => {
  return (
    <NotificationProvider>
      <PokemonsBag>
        <CurrentPokemonProvider>{children}</CurrentPokemonProvider>
      </PokemonsBag>
    </NotificationProvider>
  );
};

export default Providers;
