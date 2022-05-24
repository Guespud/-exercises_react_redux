import React from "react";
import { gql, useQuery } from "@apollo/client";

const LIST_POKEMONS = gql`
  query ListPokemon {
    gen3_species: pokemon_v2_pokemonspecies(where: {}, order_by: { id: asc }) {
      name
      id
    }
  }
`;

const ListPokemon = () => {
  const { loading, error, data } = useQuery(LIST_POKEMONS);

  console.table(data.gen3_species);

  return <></>;
};

export default ListPokemon;
