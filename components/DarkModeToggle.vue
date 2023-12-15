<template>
  <button @click="darkMode = !darkMode" class="cursor-pointer">
    <IconMoon v-if="darkMode" />
    <IconSun v-else />
  </button>
</template>

<script setup lang="ts">
const darkMode = ref(true);
</script>
