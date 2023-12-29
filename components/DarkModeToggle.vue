<template>
  <IconDark
    @click="toggleDarkMode('light')"
    v-if="$colorMode.value === 'dark'"
  />
  <IconLight @click="toggleDarkMode('dark')" v-else />
</template>

<script setup lang="ts">
const toggleDarkMode = (mode: string) => {
  const colorMode = useColorMode();
  colorMode.preference = mode;
};
</script>
