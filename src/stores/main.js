import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemonName: "",
    data: "",
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPokemon() {
      this.data = "";
      this.loading = true;
      try {
        if (this.pokemonName) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${this.pokemonName
              .toLowerCase()
              .trimStart()}/`
          );
          this.data = await response.json();
          console.log(response);
        } else {
          this.data = null;
        }
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
