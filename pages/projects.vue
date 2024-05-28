<template>
  <div>
    <h1 class="font-bold text-lg md:text-3xl text-center">Project</h1>

    <div class="mt-10">
      <ul class="flex flex-col">
        <li
          v-for="(project, index) in PROJECTS"
          :key="index"
          class="cursor-pointer"
        >
          <NuxtLink :to="project.url" target="_blank" class="hover:border-b">
            <h3>{{ project.name }}</h3>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PROJECTS } from "~/constants/data";
</script>

<style scoped></style>
