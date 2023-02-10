<script setup>
defineProps({
  text: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <button>
    {{ text }}
  </button>
</template>

<style lang="scss">
button {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  margin: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: $color-8;
  color: $color-1;
  border: 1px solid;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background-color: $color-7;
}
</style>
