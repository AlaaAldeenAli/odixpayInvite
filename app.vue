<script setup>
import { AnimatePresence, motion } from 'motion-v'
const animateonMount = ref(false)
onBeforeMount(() => {
  animateonMount.value = true
})

</script>

<template>
  <NuxtLayout>

    <div class=" flex flex-col items-center justify-start relative    min-h-svh ">

<main class="flex-1 flex flex-col items-center justify-center ">

  <NuxtPage />

</main>



<footer class=" mb-6 ">

  <h4 class="text-[14px] font-[300]">OdixPay &copy; 2025</h4>
</footer>
</div>
  </NuxtLayout>
</template>


