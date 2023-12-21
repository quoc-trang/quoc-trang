<template>
  <div class="wrapper">
    <section class="text-block">
      <h1>Phương tiện di chuyển</h1>
    </section>
    <section class="text-block">
      <h1>Điểm thuê xe máy</h1>
    </section>
    <section class="text-block">
      <h1 class="font-bold text-xl border-b border-primary">
        Địa điểm check-in miễn phí
      </h1>
      <div class="flex flex-col gap-y-2 mt-5">
        <p
          v-for="item in CHECK_IN_PLACES"
          :key="item"
          class="text-xs md:text-sm border-l border-primary pl-2"
        >
          {{ item }}
        </p>
      </div>
    </section>
    <section class="text-block">
      <h1>Quán cà phê thiên nhiên view đẹp</h1>
    </section>
    <section class="text-block">
      <h1>Ăn uống ở đâu ngon?</h1>
    </section>
    <section class="text-block">
      <h1 class="font-bold text-xl border-b border-primary">
        Cocktail chill night
      </h1>
      <div class="flex flex-col gap-y-2 mt-5">
        <p
          v-for="item in BARS_PLACES"
          :key="item"
          class="text-xs md:text-sm border-l border-primary pl-2"
        >
          {{ item }}
        </p>
      </div>
    </section>
    <section class="text-block">
      <h1 class="text-2xl font-bold">Gợi ý lịch trình</h1>

      <div class="text-xs md:text-sm leading-6 mt-5">
        <h1 class="font-bold text-xl border-b border-primary mb-5">Ngày 1</h1>
        <ol>
          <li class="time" v-for="item in DATE1" :key="item">{{ item }}</li>
        </ol>
      </div>
    </section>

    <section class="text-block">
      <h1 class="text-2xl font-bold">Gợi ý lịch trình</h1>

      <div class="text-xs md:text-sm leading-6 mt-5">
        <h1 class="font-bold text-xl border-b border-primary mb-5">Ngày 2</h1>
        <ol>
          <li class="time" v-for="item in DATE2" :key="item">{{ item }}</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CHECK_IN_PLACES, DATE1, DATE2, BARS_PLACES } from "~/constants/data";
</script>

<style scoped>
.text-block {
  @apply grid place-content-start min-h-screen snap-start pt-14 p-5;

  .time {
    @apply border-l border-primary pl-2 my-2;
  }
}
</style>
