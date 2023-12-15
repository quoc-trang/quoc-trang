<template>
  <div
    class="w-full flex justify-between md:justify-around items-center pr-5 sm:pr-10 z-10"
  >
    <Logo
      class="w-12 sm:w-20 ml-5 sm:ml-0 cursor-pointer"
      @click="$router.push('/')"
    />
    <div class="flex items-center gap-x-5">
      <Navbar />
      <DarkModeToggle />
    </div>
  </div>
</template>
