<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-2xl z-50 border-b border-white/5 transition-all duration-300">
    <div class="w-full px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
      <a
          href="#home"
          class="flex items-center border border-white/20 rounded-full px-5 sm:px-7 py-2 sm:py-2.5 bg-transparent hover:bg-white/5 transition-all duration-300 cursor-pointer"
      >
        <span class="text-white font-semibold text-xs md:text-sm tracking-[0.15em] uppercase">
          My Portfolio
        </span>
      </a>

      <button
          @click="toggleMenu"
          class="md:hidden text-gray-300 hover:text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="hidden md:block bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-2xl">
        <ul class="flex items-center text-sm font-medium">
          <li>
            <a href="#home" class="relative group block px-4 lg:px-6 py-2 rounded-full overflow-hidden cursor-pointer">
              <span class="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span class="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Home</span>
            </a>
          </li>
          <li>
            <a href="#about" class="relative group block px-4 lg:px-6 py-2 rounded-full overflow-hidden cursor-pointer">
              <span class="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span class="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">About</span>
            </a>
          </li>
          <li>
            <a href="#skills" class="relative group block px-4 lg:px-6 py-2 rounded-full overflow-hidden cursor-pointer">
              <span class="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span class="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Skills</span>
            </a>
          </li>
          <li>
            <a href="#achievements" class="relative group block px-4 lg:px-6 py-2 rounded-full overflow-hidden cursor-pointer">
              <span class="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span class="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Achievements</span>
            </a>
          </li>
          <li>
            <a href="#project" class="relative group block px-4 lg:px-6 py-2 rounded-full overflow-hidden cursor-pointer">
              <span class="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span class="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact" class="relative group block px-4 lg:px-6 py-2 rounded-full overflow-hidden cursor-pointer">
              <span class="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span class="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
        v-show="isMenuOpen"
        class="md:hidden bg-black/95 border-t border-white/10 backdrop-blur-3xl absolute w-full left-0 top-full shadow-2xl"
    >
      <ul class="flex flex-col px-4 py-4 space-y-2 text-sm font-medium">
        <li>
          <a @click="isMenuOpen = false" href="#home" class="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors">Home</a>
        </li>
        <li>
          <a @click="isMenuOpen = false" href="#about" class="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors">About</a>
        </li>
        <li>
          <a @click="isMenuOpen = false" href="#skills" class="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors">Skills</a>
        </li>
        <li>
          <a @click="isMenuOpen = false" href="#achievements" class="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors">Achievements</a>
        </li>
        <li>
          <a @click="isMenuOpen = false" href="#project" class="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors">Projects</a>
        </li>
        <li>
          <a @click="isMenuOpen = false" href="#contact" class="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>