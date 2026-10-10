<script setup lang="ts">
import { ref, computed } from 'vue'

const achievements = [
  {
    title: "Dean’s Lister 1st sem (2023-2024)",
    image: new URL('../assets/dl1-23.jpg', import.meta.url).href
  },
  {
    title: "Dean’s Lister 2nd sem (2023-2024)",
    image: new URL('../assets/dl2-23.jpg', import.meta.url).href
  },
  {
    title: "Dean’s Lister 2nd sem (2025-2026)",
    image: new URL('../assets/dl2-25.jpg', import.meta.url).href
  },
  {
    title: "ITE Challenge - Quizbowl Champion",
    image: new URL('../assets/ite-champ.jpg', import.meta.url).href
  },
  {
    title: "9th Regional CpE Challenge - Quiz Bowl - 2nd-Runner Up",
    image: new URL('../assets/9th-cpe-2nd.jpg', import.meta.url).href
  },
  {
    title: "8th Regional CpE Challenge - Quiz Bowl - 4th Place",
    image: new URL('../assets/8th-cpe-4th.jpg', import.meta.url).href
  },
  {
    title: "ICT Roadshow - Qbowl 2nd Runner Up",
    image: new URL('../assets/ict-2nd.jpg', import.meta.url).href
  }
]

const currentIndex = ref(0)
const currentAchievement = computed(() => achievements[currentIndex.value])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % achievements.length
}
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + achievements.length) % achievements.length
}
const goToSlide = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <section id="achievements" class="pt-16 pb-8 px-4 sm:px-6 md:px-8 bg-transparent text-slate-300 relative overflow-x-hidden min-h-screen flex flex-col justify-center items-center z-0">
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-150 bg-linear-to-tr from-blue-600/10 to-violet-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

    <div v-appear class="max-w-350 w-full mx-auto flex flex-col items-center z-10">
      <div class="mb-6 text-center relative">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-violet-300 to-violet-500 tracking-tight drop-shadow-[0_0_40px_rgba(139,92,246,0.6)] py-2 leading-normal">
          Achievements
        </h2>
      </div>

      <div class="relative w-full bg-black/40 backdrop-blur-2xl rounded-[2.5rem] border border-blue-500/20 p-2 sm:p-4 md:p-6 shadow-[0_0_60px_-15px_rgba(139,92,246,0.2)]">
        <div class="relative w-full h-75 sm:h-112.5 md:h-137.5 lg:h-162.5 rounded-3xl overflow-hidden bg-black">
          <Transition name="fade">
            <div :key="currentIndex" class="absolute inset-0 w-full h-full">
              <img
                  :src="currentAchievement?.image"
                  :alt="currentAchievement?.title"
                  class="w-full h-full object-cover opacity-90"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

              <div class="absolute bottom-6 sm:bottom-10 left-2 right-2 md:left-12 md:right-12 text-center flex justify-center">
                <div class="bg-black/40 border border-blue-400/20 backdrop-blur-md px-4 py-3 md:px-12 md:py-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                  <span class="text-base sm:text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 tracking-wide drop-shadow-[0_2px_10px_rgba(139,92,246,0.4)]">
                    {{ currentAchievement?.title }}
                  </span>
                </div>
              </div>
            </div>
          </Transition>

          <button
              @click="prevSlide"
              class="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 p-2 sm:p-4 md:p-5 rounded-full bg-black/50 text-white hover:bg-blue-600 hover:scale-110 border border-blue-400/20 backdrop-blur-md transition-all shadow-xl z-20"
              aria-label="Previous Achievement"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <button
              @click="nextSlide"
              class="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 p-2 sm:p-4 md:p-5 rounded-full bg-black/50 text-white hover:bg-blue-600 hover:scale-110 border border-blue-400/20 backdrop-blur-md transition-all shadow-xl z-20"
              aria-label="Next Achievement"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        <div class="flex justify-center items-center gap-2 sm:gap-3 mt-6 mb-2 flex-wrap">
          <button
              v-for="(_, index) in achievements"
              :key="index"
              @click="goToSlide(index)"
              class="transition-all duration-300 rounded-full"
              :class="currentIndex === index ? 'w-10 sm:w-12 h-2.5 sm:h-3.5 bg-linear-to-r from-blue-500 to-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]' : 'w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-slate-700/60 hover:bg-blue-400/60'"
              :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>