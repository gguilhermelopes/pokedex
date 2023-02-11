<script setup>
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/main";
const pokemonStore = usePokemonStore();
const { data, statsArray } = storeToRefs(pokemonStore);
</script>

<template>
  <section v-if="data" class="pokemonPageWrapper">
    <div class="titlesWrapper">
      <h1>
        {{ `${data.name.toUpperCase().charAt(0)}${data.name.slice(1)}` }}
      </h1>
      <h2>
        Type:
        {{
          `${data.types[0].type.name
            .toUpperCase()
            .charAt(0)}${data.types[0].type.name.slice(1)}`
        }}
      </h2>
    </div>
    <div class="imgWrapper">
      <img
        class="pokemonImg"
        :src="data.sprites.front_default"
        :alt="data.name"
      />
      <img
        class="pokemonImg"
        :src="data.sprites.back_default"
        :alt="data.name"
      />
    </div>
    <ul>
      <li v-for="item in statsArray" :key="item.base_stat">
        {{
          `${item.stat.name.toUpperCase().charAt(0)}${item.stat.name.slice(1)}`
        }}
        : <span>{{ item.base_stat }}</span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.pokemonPageWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: $font;
  .titlesWrapper {
    grid-column: 1/-1;
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      color: $color-9;
      padding: 1rem;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 1.125rem;
      font-weight: 500;
      color: $color-7;
    }
  }
  .imgWrapper {
    align-self: center;
    img:first-child {
      margin-bottom: 1rem;
    }
  }
  ul {
    li {
      padding: 0.5rem;
      background-color: $color-2;
      margin: 0.75rem;
      text-align: end;
      font-weight: 500;
      color: $color-6;
      border-radius: 0.5rem;
      width: 20ch;
      span {
        font-weight: 700;
        color: $color-8;
      }
    }
  }
}
</style>
