<template>
  <IconMoon
    v-if="$colorMode.value === 'dark'"
    class="cursor-pointer"
    @click="toggleMode('light')"
  />
  <IconSun v-else class="cursor-pointer" @click="toggleMode('dark')" />
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const toggleMode = (mode: "dark" | "light") => {
  colorMode.value = mode;
};
</script>
