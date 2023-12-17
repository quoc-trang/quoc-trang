<template>
  <div class="wrapper">
    <section class="text-block">
      <h1>Phương tiện di chuyển</h1>
    </section>
    <section class="text-block">
      <h1>Điểm thuê xe máy</h1>
    </section>
    <section class="text-block">
      <h1>Địa điểm check-in miễn phí</h1>
    </section>
    <section class="text-block">
      <h1>Quán cà phê thiên nhiên view đẹp</h1>
    </section>
    <section class="text-block">
      <h1>Ăn uống ở đâu ngon?</h1>
    </section>
    <section class="text-block">
      <h1>Cocktail chill night</h1>
    </section>
    <section class="text-block">
      <h1>Mua gì làm quà?, địa điểm?</h1>
    </section>
    <section class="text-block p-5">
      <h1 class="text-2xl font-bold">Gợi ý lịch trình</h1>

      <div class="text-xs md:text-sm leading-6 mt-5">
        <h1 class="font-bold text-xl border-b border-primary mb-5">Ngày 1</h1>
        <ol>
          <li class="time" v-for="item in date1" :key="item">{{ item }}</li>
        </ol>
      </div>
    </section>

    <section class="text-block p-5">
      <h1 class="text-2xl font-bold">Gợi ý lịch trình</h1>

      <div class="text-xs md:text-sm leading-6 mt-5">
        <h1 class="font-bold text-xl border-b border-primary mb-5">Ngày 2</h1>
        <ol>
          <li class="time" v-for="item in date2" :key="item">{{ item }}</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const date1 = [
  "8h00: Phở Atiso - 45k - H19 - H2O, KQH Phạm Hồng Thái, phường 10",
  "9h00: Check-in Giáng sinh ở Yooberi - 100k - 27 Trịnh Hoài Đức, phường 11",
  "11h00: Ăn trưa tại Tiệm gà Túk Túk - 160k - 39 Trần Đại Nghĩa, phường 8",
  "12h30: Về homestay nghỉ trưa - 200-250k/người",
  "14h30: Thăm thủ ở Chika Farm - 100k - Đa Quý, Xuân Thọ 16h00: Tiện đường ghé qua Vườn Hồng Trên Mây - Miễn phí",
  "19h00: Đến Túi nướng Lavender ăn tối - 160k - 17/6 Nguyễn Trãi, phường 9",
  "21h00: Đi dạo, ngắm phố xá, nghe violin ở Khu Hòa Bình",
  "22h00: Nhâm nhi cocktail ở ABIT BAR & BISTRO - 61 Nguyễn Trãi, phường 9",
];

const date2 = [
  "6h30: Cà phê sáng ở Quyen kế biệt thự cổ - 20k - 7 Cô Giang",
  "7h30: Ăn sáng nhẹ nhàng bánh mỳ chảo - 25k - 303 Hai Bà Trưng, Phường 6",
  "8h30: Cà phê picnic siêu chill ở The Camp Inn - 65k - Chân đèo Mimosa",
  "10h00: Chạy xe 1 vòng hóng mát, ghé qua dốc Nhớ Hoài",
  "11h30: Ăn trưa ở Chợ Phiên Quán - 108 Vạn Hạnh, P8 12h30: Check-out homestay",
];
</script>

<style scoped>
.text-block {
  @apply grid place-content-start min-h-screen snap-start pt-14;

  .time {
    @apply border-l border-primary pl-2 my-2;
  }
}
</style>
