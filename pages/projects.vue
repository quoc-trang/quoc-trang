<template>
  <div class="text-center">
    <h1 class="font-bold text-3xl">Project</h1>

    <div>
      <h2 class="text-xl">Vue Certification</h2>
      <ul class="grid grid-cols-3">
        <li v-for="(project, index) in PROJECTS" :key="index">
          <h1>{{ project.name }}</h1>
          <p>{{ project.description }}</p>
          <p>
            <Icon v-for="(tech, i) in project.techStack" :key="i" :name="tech">
            </Icon>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PROJECTS } from "~/constants/data";
</script>

<style scoped></style>
