<template>
  <section class="flex flex-col items-start relative">
    <div class="mt-20 sm:mt-48">
      <h1 class="font-bold inline-block text-3xl">Lê Quốc Trạng</h1>
      <p class="leading-6 md:leading-8 mt-10 animate-slide-up">
        I'm a Software Engineer based in Vietnam
        <br />
        I love technology and learning English language
        <br />
        Outside of programming, I enjoy staying with my family
      </p>
      <div class="mt-10 animate-slide-up animation-delay-100">
        <h1>Find me on</h1>
        <ul class="flex gap-x-5 mt-2">
          <li
            v-for="(social, index) in SOCIALS"
            :key="index"
            class="hover-text-primary cursor-pointer"
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
                <Icon :name="social.icon" size="1.3em" />
              </div>
              <span class="ml-2 hidden md:block">{{ social.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <hr class="w-full my-5" />
    <NuxtLink
      to="https://nuxt.com/"
      class="flex hover-text-primary animate-slide-up animation-delay-200"
      target="_blank"
    >
      <span class="mr-2 text-sm translate-y-[2px]">build with</span>
      <img src="~/assets/images/nuxtjs.png" width="20" />
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { SOCIALS } from "~/constants/data";
</script>
