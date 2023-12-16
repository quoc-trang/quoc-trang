<template>
  <IconMoon
    v-if="isDarkMode"
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

const isDarkMode = ref(false);

watch(colorMode, () => {
  if (colorMode.value === "dark") {
    isDarkMode.value = true;
  } else {
    isDarkMode.value = false;
  }
});
</script>
