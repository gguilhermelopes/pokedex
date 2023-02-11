<script setup>
import SvgIcon from "./icons/SvgIcon.vue";
</script>

<template>
  <div class="loading">
    <SvgIcon />
  </div>
</template>

<style lang="scss">
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: spin 0.5s infinite;
    width: 70%;
    opacity: 0.8;
  }
}

@keyframes spin {
  to {
    transform: rotate(720deg);
  }
}
</style>
