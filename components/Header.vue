<template>
  <div class="w-full flex justify-between items-center">
    <!-- <Logo class="w-12 sm:w-20 cursor-pointer" @click="$router.push('/')" /> -->
    <div class="flex items-center gap-x-5">
      <Navbar />
      <ClientOnly>
        <DarkModeToggle />
      </ClientOnly>
    </div>
  </div>
</template>
