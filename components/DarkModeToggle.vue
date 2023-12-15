<template>
  <IconMoon
    v-if="$colorMode.value === 'dark'"
    class="cursor-pointer"
    @click="$colorMode.value = 'light'"
  />
  <IconSun
    v-if="$colorMode.value === 'light'"
    class="cursor-pointer"
    @click="$colorMode.value = 'dark'"
  />
</template>
