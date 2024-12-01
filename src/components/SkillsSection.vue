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
        { name: "TypeScript", icon: "/src/assets/icons/typescript.svg" },
        { name: "Vue.js", icon: "/src/assets/icons/vue.svg" },
        { name: "Angular", icon: "/src/assets/icons/angular.svg" },
        { name: "Node.js", icon: "/src/assets/icons/node.svg" },
        { name: "Java", icon: "/src/assets/icons/java.svg" },
        { name: "Python", icon: "/src/assets/icons/python.svg" },
        { name: "Flutter", icon: "/src/assets/icons/flutter.svg" },
        {
          name: "AI, Machine learning, Deep learning",
          icon: "/src/assets/icons/robot-ai.svg",
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
