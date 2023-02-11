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
        this.loading = false;

        const speciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${this.pokemonName
            .toLowerCase()
            .trimStart()}/`
        );
        const speciesData = await speciesResponse.json();

        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionResponse.json();

        let evoChain = [];
        let evoData = evolutionData.chain;

        do {
          let numberOfEvolutions = evoData["evolves_to"].length;
          evoChain.push({
            species_name: evoData.species.name,
          });
          if (numberOfEvolutions > 1) {
            for (let i = 1; i < numberOfEvolutions; i++) {
              evoChain.push({
                species_name: evoData.evolves_to[i].species.name,
              });
            }
          }
          evoData = evoData["evolves_to"][0];
        } while (
          !!evoData &&
          evoData.hasOwnProperty.call(evoData, "evolves_to")
        );

        this.evolutionDataArray = evoChain;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
