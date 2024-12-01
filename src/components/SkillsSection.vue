<template>
  <section id="skills" class="skills py-20 bg-secondary text-white">
    <h2 class="text-3xl lg:text-4xl font-bold text-center mb-10">
      Umiejętności
    </h2>
    <div class="skills-grid grid gap-8 lg:grid-cols-4 p-12">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-card p-6 bg-primary rounded-lg shadow-lg text-center transform transition hover:scale-105"
      >
        <img
          :src="skill.icon"
          :alt="skill.name"
          class="w-16 h-16 mx-auto mb-4"
        />
        <h3 class="text-xl font-semibold">{{ skill.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      skills: [
        {
          name: "TypeScript",
          icon: new URL("@/assets/icons/koncert.svg", import.meta.url).href,
        },
        {
          name: "Vue.js",
          icon: new URL("@/assets/icons/vue.svg", import.meta.url).href,
        },
        {
          name: "Angular",
          icon: new URL("@/assets/icons/angular.svg", import.meta.url).href,
        },
        {
          name: "Node.js",
          icon: new URL("@/assets/icons/node.svg", import.meta.url).href,
        },
        {
          name: "Java",
          icon: new URL("@/assets/icons/java.svg", import.meta.url).href,
        },
        {
          name: "Python",
          icon: new URL("@/assets/icons/python.svg", import.meta.url).href,
        },
        {
          name: "Flutter",
          icon: new URL("@/assets/icons/flutter.svg", import.meta.url).href,
        },
        {
          name: "AI, Machine learning, Deep learning",
          icon: new URL("@/assets/icons/robot-ai.svg", import.meta.url).href,
        },
      ],
    };
  },
};
</script>

<style scoped>
.skill-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>
