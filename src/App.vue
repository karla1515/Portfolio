<script setup lang="ts">
import Navbar from './components/navbar.vue'
import Home from './components/home.vue'
import About from './components/about.vue'
import Skills from './components/skills.vue'
import Achievements from './components/achievements.vue'
import Project from './components/project.vue'
import Contact from './components/contact.vue'
</script>

<template>
  <div class="min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white">
    <Navbar />

    <main class="pt-16 overflow-hidden">
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Achievements id="achievements" />
      <Project id="project" />
      <Contact id="contact" />
    </main>
  </div>
</template>