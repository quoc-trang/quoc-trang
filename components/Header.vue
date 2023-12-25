<template>
  <div class="w-full flex justify-between items-center">
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
