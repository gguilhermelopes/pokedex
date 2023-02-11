<script setup>
import SvgIcon from "./icons/SvgIcon.vue";
import { RouterLink } from "vue-router";
import { usePokemonStore } from "../stores/main";
import { storeToRefs } from "pinia";

const pokemonStore = usePokemonStore();
let { data, error } = storeToRefs(pokemonStore);
</script>

<template>
  <div class="headerWrapper">
    <header>
      <RouterLink
        to="/"
        class="homeLink"
        @click="
          data = null;
          error = null;
        "
      >
        <SvgIcon />
      </RouterLink>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.headerWrapper {
  background-color: $color-2;
  width: 100vw;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: 0.3s;
  }

  svg:hover {
    transform: rotate(720deg);
  }
}
@media (max-width: 500px) {
  .headerWrapper {
    padding: 0.5rem;
  }
}
</style>
