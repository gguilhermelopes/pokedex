<script setup>
import { storeToRefs } from "pinia";
import { usePokemonStore } from "../stores/main";
const pokemonStore = usePokemonStore();
const { pokemonName } = storeToRefs(pokemonStore);

defineProps({
  type: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label :for="id">{{ label }}</label>
  <input :type="type" :id="id" v-model="pokemonName" />
</template>

<style lang="scss" scoped>
label {
  margin: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: $color-9;
}
input {
  padding: 0.75rem 1.5rem;
  width: 100%;
  background-color: $color-0;
  border: 2px solid $color-6;
  border-radius: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  font-size: 1rem;
  color: $color-9;
  outline: none;
}
input:hover,
input:focus {
  border-color: $color-8;
}
</style>
