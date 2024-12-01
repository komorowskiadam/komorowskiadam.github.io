<template>
  <div id="app">
    <header class="header">
      <h1 class="text-4xl font-bold">Adam Komorowski</h1>
      <nav v-if="!isMobile">
        <a
          @click="scrollTo('#about')"
          class="hover:bg-gradient-to-r from-primary to-secondary hover:text-white p-2 rounded"
          >O mnie</a
        >
        <a
          @click="scrollTo('#projects')"
          class="hover:bg-gradient-to-r from-primary to-secondary hover:text-white p-2 rounded"
          >Projekty</a
        >
        <a
          @click="scrollTo('#skills')"
          class="hover:bg-gradient-to-r from-primary to-secondary hover:text-white p-2 rounded"
          >Umiejętności</a
        >
        <a
          @click="scrollTo('#contact')"
          class="hover:bg-gradient-to-r from-primary to-secondary hover:text-white p-2 rounded"
          >Kontakt</a
        >
      </nav>
    </header>

    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script lang="ts">
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import { gsap } from "gsap";

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

export default {
  components: {
    HeroSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
  },
  data() {
    return {
      isMobile: isMobileDevice(),
    };
  },
  methods: {
    scrollTo(section: string) {
      gsap.to(window, {
        duration: 1,
        scrollTo: section,
        ease: "power2.inOut",
      });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #f3f4f6;
  position: sticky;
  top: 0;
  z-index: 10;
}
header a {
  margin: 0 1rem;
  text-decoration: none;
  color: #1f2937;
  font-weight: bold;
}
</style>
