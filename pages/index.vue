<template>
  <section class="w-screen h-screen flex flex-col items-center px-4">
    <div class="mt-32 md:mt-40">
      <h1 class="font-bold inline-block text-3xl">Lê Quốc Trạng</h1>
      <p class="leading-6 md:leading-8 mt-10">
        Hi ✌️,<br />
        I'm a Frontend developer currently working at
        <NuxtLink
          to="https://recruit-vn.raksul.com/"
          target="_blank"
          class="fav-border font-bold hover:opacity-80 duration-300"
          >Raksul Viet Nam</NuxtLink
        >
        <br />
        Outside of programming, I enjoy staying with my family<br />
        if you're here please follow my
        <NuxtLink
          to="https://www.tiktok.com/@vanlaanh_2k"
          target="_blank"
          class="fav-border font-bold hover:opacity-80 duration-300"
          >Tiktok,</NuxtLink
        >
        I want to be famous 😂
      </p>
      <div class="mt-10 md:mt-20">
        <h1>Find me on</h1>
        <ul class="flex gap-x-5 mt-2">
          <li
            v-for="(social, index) in SOCIALS"
            :key="index"
            class="hover:text-primary cursor-pointer duration-300"
          >
            <NuxtLink
              :to="social.url"
              target="_blank"
              class="flex justify-center items-center"
            >
              <div class="block md:hidden">
                <Icon :name="social.icon" size="2em" />
              </div>
              <div class="hidden md:block">
                <Icon :name="social.icon" size="1.5em" />
              </div>
              <span class="ml-2 hidden md:block">{{ social.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SOCIALS } from "~/constants/data";
</script>
