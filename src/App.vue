<template>
  <div id="app">
    <header class="header">
      <h1 class="text-4xl font-bold">Adam Komorowski</h1>
      <nav v-if="!isMobile">
        <a
          href="#about"
          class="hover:bg-gradient-to-r from-primary to-secondary hover:text-white p-2 rounded"
          >O mnie</a
        >
        <a
          href="#projects"
          class="hover:bg-gradient-to-r from-primary to-secondary hover:text-white p-2 rounded"
          >Projekty</a
        >
        <a
          href="#skills"
          class="hover:bg-gradient-to-r from-primary to-secondary hover:text-white p-2 rounded"
          >Umiejętności</a
        >
        <a
          href="#contact"
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
