<template>
  <div>
    <h1 class="mt-10 mb-5">Mini projects from Vue Certificated</h1>
    <div>
      <ul class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <li v-for="(project, index) in PROJECTS" :key="index" class="grid-item">
          <NuxtLink
            :to="project.url"
            target="_blank"
            class="flex justify-between items-center"
          >
            <h3>{{ project.name }}</h3>
            <Icon name="icon-park-outline:click-tap" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PROJECTS } from "~/constants/data";
</script>

<style scoped>
.grid-item {
  @apply cursor-pointer border rounded p-3 hover:shadow-md hover:shadow-white duration-300 hover:-translate-y-1 hover:translate-x-1 h-32;
}
</style>
