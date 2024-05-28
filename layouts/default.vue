<template>
  <div class="flex justify-center">
    <div class="w-full max-w-4xl">
      <header>
        <Header />
      </header>

      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "ngoisaocodon",
});
</script>
