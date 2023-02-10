<script setup>
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
  <div class="inputWrapper">
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" />
  </div>
</template>

<style lang="scss" scoped>
.inputWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;

  label {
    margin-bottom: 0.75rem;
    font-weight: 500;
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
}
</style>
