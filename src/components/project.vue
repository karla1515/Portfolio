<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    title: "Sumobot",
    description: "An autonomous, programmable robotics project built for competitive arena wrestling. Features custom sensor integration, real-time motor control logic, and strict physical constraint engineering.",
    image: new URL('../assets/sumobot.jpg', import.meta.url).href,
    status: "Completed",
    isOpen: false
  },
  {
    title: "AskAudrey",
    description: "A specialized platform designed for users to easily book appointments and access comprehensive information regarding insurance services.",
    image: new URL('../assets/ask-audrey.jpg', import.meta.url).href,
    status: "Completed",
    isOpen: false
  },
  {
    title: "Tattao Vet System",
    description: "A comprehensive veterinary clinic management system. Engineered to efficiently handle patient records, appointment scheduling, inventory tracking, and billing operations for modern veterinary practices.",
    image: new URL('../assets/vet-system.jpg', import.meta.url).href,
    status: "Completed",
    isOpen: false
  },
  {
    title: "Dev Board",
    description: "A dedicated hardware prototyping board and accompanying software dashboard crafted to assist developers. Streamlines the testing of microcontrollers, I/O states, and rapid circuit iterations.",
    image: new URL('../assets/dev-board.jpg', import.meta.url).href,
    status: "Completed",
    isOpen: false
  }
])

const toggleProject = (index: number) => {
  const selectedProject = projects.value[index]
  if (!selectedProject) return

  selectedProject.isOpen = !selectedProject.isOpen
  projects.value.forEach((proj, i) => {
    if (i !== index) proj.isOpen = false
  })
}
</script>

<template>
  <section id="projects" class="pt-24 pb-40 px-4 sm:px-6 md:px-8 bg-transparent text-slate-300 relative min-h-screen flex flex-col items-center">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 bg-blue-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

    <div v-appear class="max-w-5xl w-full mx-auto z-10">
      <div class="mb-12 md:mb-16 text-center">
        <h2 class="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-violet-400 tracking-tight drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] py-4 leading-normal">
          My Projects
        </h2>
        <p class="text-blue-200 text-base md:text-lg mt-4 max-w-2xl mx-auto px-4 md:px-0">
          A showcase of software applications, hardware engineering, and complete systems I've built.
        </p>
      </div>

      <div class="space-y-4 w-full">
        <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden shadow-lg smooth-card hover:border-violet-500/40"
        >
          <button
              @click="toggleProject(index)"
              class="w-full flex items-center justify-between p-4 sm:p-6 md:p-8 cursor-pointer focus:outline-none group"
          >
            <div class="flex items-center gap-4 sm:gap-6">
              <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors text-left">
                {{ project.title }}
              </h3>
              <span class="hidden md:inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                <span class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></span>
                {{ project.status }}
              </span>
            </div>

            <div
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/5 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:bg-blue-600/20 flex-shrink-0"
                :class="project.isOpen ? 'rotate-180 bg-blue-600/40 border-blue-500/50' : ''"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>

          <div
              class="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]"
              :class="project.isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <div class="p-4 sm:p-6 md:p-8 pt-0 border-t border-white/5">
                <div class="mb-4 md:hidden">
                  <span class="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                    <span class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {{ project.status }}
                  </span>
                </div>

                <div class="flex flex-col lg:flex-row gap-6 md:gap-8 items-start mt-2">
                  <div class="w-full lg:w-3/5 rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <img
                        :src="project.image"
                        :alt="project.title"
                        class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div class="w-full lg:w-2/5 flex flex-col justify-center">
                    <h4 class="text-lg md:text-xl font-semibold text-blue-200 mb-2 md:mb-3">Overview</h4>
                    <p class="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg">
                      {{ project.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>