import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    loading: false,
    error: null,
    pokemonName: "",
    data: "",
    statsArray: "",

    evolutionDataArray: "",
  }),
  actions: {
    async fetchPokemon() {
      this.data = "";
      this.loading = true;
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemonName
            .toLowerCase()
            .trimStart()}/`
        );
        this.data = await response.json();
        this.statsArray = this.data.stats;

        const speciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${this.pokemonName
            .toLowerCase()
            .trimStart()}/`
        );
        const speciesData = await speciesResponse.json();

        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionResponse.json();
        this.evolutionDataArray = evolutionData.chain.evolves_to;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
