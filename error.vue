<script setup>
import { AnimatePresence, motion } from 'motion-v'

const error = useError()

</script>

<template>
    <div    class=" flex flex-col items-center justify-start relative    min-h-svh ">
    <AnimatePresence>

  

         <motion.main v-if=" error" :initial=" { opacity: 0 }"  :animate="{ opacity: 1,
            transition: { duration: 0.5 }

     }"  class="flex-1 flex flex-col items-center justify-center w-full">
            <h1 class="text-[60px] font-[700] text-gray-800">{{ error.statusCode }}</h1>
            <h2 class="text-xl font-[300] text-center  text-gray-800">{{error.message}}</h2>
        </motion.main>

</AnimatePresence>

        <footer class=" mb-6 ">
            <h4 class="text-[14px] font-[300]">OdixPay &copy; 2025</h4>
        </footer>
        </div>
</template>
