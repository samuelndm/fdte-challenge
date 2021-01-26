import React from "react";
import NotificationProvider from "./NotificationProvider";
import PokemonsBagProvider from "./PokemonsBagProvider";
import CurrentPokemonProvider from "./CurrentPokemonProvider";

const Providers = ({ children }) => {
  return (
    <NotificationProvider>
      <PokemonsBagProvider>
        <CurrentPokemonProvider>{children}</CurrentPokemonProvider>
      </PokemonsBagProvider>
    </NotificationProvider>
  );
};

export default Providers;
