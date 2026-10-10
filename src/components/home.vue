<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const slides = [
  new URL('../assets/profile.jpg', import.meta.url).href,
  new URL('../assets/slide1.jpg', import.meta.url).href,
  new URL('../assets/slide2.jpg', import.meta.url).href,
]

const currentSlide = ref(0)
let slideshowInterval: ReturnType<typeof setInterval> | null = null

const startSlideshow = () => {
  if (slideshowInterval) return
  slideshowInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 2000)
}

const stopSlideshow = () => {
  if (slideshowInterval) {
    clearInterval(slideshowInterval)
    slideshowInterval = null
  }
}

onUnmounted(() => {
  stopSlideshow()
})
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center py-24 px-4 md:px-12 overflow-hidden bg-transparent">
    <div v-appear class="relative z-10 w-full max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div
          @mouseenter="startSlideshow"
          @mouseleave="stopSlideshow"
          class="relative aspect-4/5 w-full max-w-lg mx-auto rounded-4xl overflow-hidden shadow-2xl bg-[#0a0a0a] border border-white/5 group cursor-pointer"
      >
        <div class="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md text-white/90 text-xs px-4 py-2 rounded-full border border-white/10 tracking-widest font-semibold">
          0{{ currentSlide + 1 }} / 03
        </div>

        <div class="relative w-full h-full">
          <transition-group name="fade">
            <img
                v-for="(slide, index) in slides"
                :key="slide"
                v-show="index === currentSlide"
                :src="slide"
                alt="Karla Tattao Showcase"
                class="absolute inset-0 w-full h-full object-cover grayscale-15 group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </transition-group>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          <span
              v-for="(_, index) in slides"
              :key="index"
              class="h-1.5 rounded-full transition-all duration-500"
              :class="index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30'"
          ></span>
        </div>
      </div>

      <div class="flex flex-col items-start text-left lg:pl-6 px-4 md:px-0">
        <div class="mb-6 text-blue-400 tracking-[0.2em] uppercase font-bold text-xs md:text-sm">
          Computer Engineering Student — EST. 2023
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          <span class="block text-white/90 mb-2">Hi, I'm</span>
          <span class="block bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-violet-400 to-blue-400 bg-size-[200%_auto] transition-all duration-500 hover:animate-text-gradient cursor-default drop-shadow-sm">
             Karla Tattao
          </span>
        </h1>

        <p class="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed mb-12">
          "Connecting Ideas, Coding the Future."
        </p>

        <a
            href="/karla-tattao-cv.pdf"
            download="Karla_Tattao_CV.pdf"
            class="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group"
        >
          <span>Download CV</span>
          <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes text-gradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
.hover\:animate-text-gradient:hover {
  animation: text-gradient 2s linear infinite;
}
</style>