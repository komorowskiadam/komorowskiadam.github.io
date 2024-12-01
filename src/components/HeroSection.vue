<template>
  <section
    id="about"
    class="hero h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary text-white"
  >
    <div class="text-center">
      <h1 class="text-4xl lg:text-6xl font-bold hero-title">
        Cześć, jestem Adam Komorowski
      </h1>
      <p class="text-lg lg:text-2xl mt-4 hero-description">
        Frontend Developer | Student Computer Science
      </p>
      <div class="mt-8">
        <button @click="scrollTo('#projects')" class="btn-primary hero-button">
          Zobacz moje projekty
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  methods: {
    scrollTo(id) {
      gsap.to(window, {
        duration: 1,
        scrollTo: id,
      });
    },
  },
  mounted() {
    gsap.from(".hero-title", {
      duration: 2,
      y: -100,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.from(".hero-description", {
      duration: 1.5,
      x: -300,
      opacity: 0,
      ease: "power4.out",
    });

    gsap.from(".hero-button", {
      duration: 2.5,
      x: 300,
      opacity: 0,
      ease: "power4.out",
    });
  },
};
</script>

<style scoped>
.hero {
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
}
.btn-primary {
  padding: 0.5rem 1rem;
  background: #10b981;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}
.btn-secondary {
  padding: 0.5rem 1rem;
  background: #f59e0b;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}
</style>
