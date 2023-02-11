<script setup>
import { storeToRefs } from "pinia";
import ButtonComponent from "../components/ButtonComponent.vue";
import InputComponent from "../components/InputComponent.vue";
import { usePokemonStore } from "../stores/main";
import LoadingComponent from "../components/LoadingComponent.vue";
import PokemonComponent from "../components/PokemonComponent.vue";

const pokemonStore = usePokemonStore();
const { fetchPokemon } = pokemonStore;
const { data, loading, error, pokemonName } = storeToRefs(pokemonStore);
</script>

<template>
  <main v-if="!data && !loading" class="mainWrapper">
    <form class="formWrapper" @submit.prevent="fetchPokemon(pokemonName)">
      <InputComponent type="text" label="Choose your Pokémon!" id="pokemon" />
      <ButtonComponent text="Send!" />
      <div v-if="error" class="error">
        <p>We couldn't find your Pokémon. Double check the name, please.</p>
      </div>
    </form>
  </main>
  <main v-if="loading" class="mainWrapper"><LoadingComponent /></main>
  <main v-if="data" class="mainWrapper">
    <PokemonComponent />
  </main>
</template>

<style lang="scss">
.mainWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 22rem;
  font-family: $font;

  .formWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .error {
    p {
      color: red;
      text-align: center;
    }
  }
}
</style>
