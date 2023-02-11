<script setup>
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/main";
import { RouterLink } from "vue-router";

const pokemonStore = usePokemonStore();
const { data, evolutionDataArray } = storeToRefs(pokemonStore);
</script>

<template>
  <RouterLink :to="`/pokemon/${data.name}`">
    <div class="pokemonWrapper">
      <img
        class="pokemonImg"
        :src="data.sprites.front_default"
        :alt="data.name"
      />
      <h1 class="title">
        {{ `${data.name.toUpperCase().charAt(0)}${data.name.slice(1)}` }}
      </h1>
    </div>
  </RouterLink>
  <h2 class="evolutionTitle">Evolution Chain</h2>
  <ul class="evolutionWrapper">
    <li v-for="item in evolutionDataArray" :key="item.species_name">
      {{
        `${item.species_name.toUpperCase().charAt(0)}${item.species_name.slice(
          1
        )}`
      }}
    </li>
  </ul>
</template>

<style lang="scss">
.pokemonWrapper {
  padding: 3rem;
  background-color: $color-4;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.75rem;
  cursor: pointer;
  .title {
    font-size: 1.75rem;
    font-weight: 700;
    color: $color-7;
  }
}
.pokemonWrapper:hover,
.pokemonWrapper:focus {
  background-color: $color-5;
}
.evolutionTitle {
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  color: $color-7;
}
.evolutionWrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  li {
    background-color: $color-2;
    padding: 0.75rem;
    border-radius: 0.5rem;
    cursor: pointer;
    h2 {
      color: $color-7;
      text-align: center;
      font-weight: 500;
    }
  }
  li:hover,
  li:focus {
    background-color: $color-3;
  }
}
</style>
