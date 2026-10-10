<script setup lang="ts">
const skills = [
  {
    name: "Graphic Designing",
    category: "Design (Canva)",
    description: "Visual content creation, layouts, branding, and typography.",
    application: "Creating UI mockups, social media graphics, and presentations.",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-400/10",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
  },
  {
    name: "Microsoft Office",
    category: "Productivity",
    description: "Word processing, spreadsheet management, and slide presentations.",
    application: "Documentation, data encoding, and professional reporting.",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`
  },
  {
    name: "C Programming",
    category: "Core Programming",
    description: "Basic Programming Logic and Design, memory management, and structure.",
    application: "Studied for basic programming algorithm implementations.",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`
  },
  {
    name: "Python Programming",
    category: "Data & Scripts",
    description: "General-purpose programming, data manipulation, and automation.",
    application: "Current main language for development, scripting, and studies.",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
  },
  {
    name: "Web Development",
    category: "Frontend Systems",
    description: "Semantic markup, modern flex/grid layouts, and custom interactions.",
    application: "Frontend foundation used for building UI and web projects.",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`
  },
  {
    name: "Backend Development",
    category: "API & Servers",
    description: "Server-side logic, routing, and relational database management.",
    application: "API development, testing, and persistent data storage.",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-400/10",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>`
  }
]
</script>

<template>
  <section id="skills" class="py-24 px-6 bg-transparent text-slate-300 relative overflow-hidden min-h-screen flex items-center">
    <div class="absolute top-0 left-1/4 w-125 h-125 bg-violet-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-100 h-100 bg-indigo-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

    <div v-appear class="max-w-7xl mx-auto z-10 w-full">
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Skills</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="(skill, index) in skills"
            :key="index"
            class="bg-[#111827]/80 backdrop-blur-md p-6 rounded-2xl border border-violet-500/20 hover:border-violet-500/60 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.25)] smooth-card flex flex-col group relative overflow-hidden"
        >
          <div class="flex justify-between items-start mb-6">
            <div class="p-3 rounded-xl border border-white/5 shadow-sm" :class="skill.iconBg">
              <span :class="skill.iconColor" v-html="skill.icon"></span>
            </div>
            <span class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-violet-300 bg-violet-900/30 rounded-full border border-violet-700/30">
              {{ skill.category }}
            </span>
          </div>

          <div class="grow">
            <h3 class="text-2xl font-bold text-slate-100 mb-2">{{ skill.name }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              {{ skill.description }}
            </p>
          </div>

          <div class="w-full h-px bg-linear-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 my-5"></div>

          <div class="mt-auto">
            <p class="text-sm">
              <span class="font-bold text-violet-300">Application: </span>
              <span class="text-slate-400 font-mono text-xs">{{ skill.application }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>