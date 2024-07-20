<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <iframe
        src="https://giphy.com/embed/Jqzc9fbHtciNckOAgl"
        width="480"
        height="466"
        style=""
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <div class="text-center">
        <button class="btn bg-green-500 active:bg-green-800">Yes</button>
        <button class="btn bg-red-500 active:bg-red-800">No</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<style scoped>
.btn {
  @apply border rounded mx-2 my-2 py-2 px-6 cursor-pointer;
}
</style>
