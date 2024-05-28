<template>
  <nav>
    <ul class="flex gap-x-5">
      <li
        v-for="(item, index) in NAVBAR"
        :key="index"
        class="hover:text-primary duration-300"
      >
        <NuxtLink :to="item.to" class="flex justify-center items-center">
          <!-- <Icon :name="item.icon" /> -->
          <span class="text-sm ml-1">{{ item.text }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { NAVBAR } from "~/constants/data";
</script>
