<template>
  <div v-if="$colorMode.preference === 'light'">
    <IconLight @click="toggleDarkMode('dark')" />
  </div>
  <div v-if="$colorMode.preference === 'dark'">
    <IconDark @click="toggleDarkMode('light')" />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const toggleDarkMode = (mode: string) => {
  colorMode.preference = mode;
};

onMounted(() => {
  colorMode.preference = "light";
});
</script>
