<script setup>
import { storeToRefs } from "pinia";
import ButtonComponent from "../components/ButtonComponent.vue";
import InputComponent from "../components/InputComponent.vue";
import { usePokemonStore } from "../stores/main";
const pokemonStore = usePokemonStore();
const { fetchPokemon } = pokemonStore;
const { data, loading, error } = storeToRefs(pokemonStore);
</script>

<template>
  <main v-if="!data && !loading" class="mainWrapper">
    <form class="formWrapper" @submit.prevent="fetchPokemon">
      <InputComponent type="text" label="Escolha o seu Pokémon!" id="pokemon" />
      <ButtonComponent text="Pesquisar!" />
      <div v-if="error" class="error">
        <p>Pokemón não encontrado. Verifique o nome, por gentileza.</p>
      </div>
    </form>
  </main>
  <main v-if="loading" class="mainWrapper">
    <p>Carregando...</p>
  </main>
  <main v-if="data" class="mainWrapper">
    <p>{{ data.name }}</p>
  </main>
</template>

<style lang="scss">
.mainWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  min-height: 12rem;
  .formWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .error {
    p {
      color: $color-5;
      text-align: center;
    }
  }
}
</style>
