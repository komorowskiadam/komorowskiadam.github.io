<template>
  <section id="projects" class="projects py-20 bg-white">
    <h2 class="text-3xl lg:text-4xl font-bold text-center text-primary">
      Projekty
    </h2>
    <div class="projects-grid grid gap-8 mt-10 lg:grid-cols-3">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card bg-secondary text-white p-6 rounded-lg shadow-lg"
      >
        <img
          :src="project.image"
          alt="project.title"
          class="rounded mb-4 project-image"
        />
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <p class="text-sm mt-2">{{ project.description }}</p>
        <a
          :href="project.link"
          target="_blank"
          class="btn-primary mt-4 inline-block"
          >Zobacz więcej</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "System zarządzania wydarzeniami masowymi",
          description:
            "System składa się z aplikacja webowa do zarządzania wydarzeniami (Angular), mobilnej aplikacji dla uczestników (Flutter) oraz API (Java SpringBoot).",
          image: "/src/assets/koncert.png",
          link: "https://github.com/komorowskiadam/inzynierka",
        },
        {
          title: "Gra MMORPG",
          description:
            "Będąca w fazie rozwoju przeglądarkowa unikalna gra MMORPG. Więcej informacji wkrótce!",
          image: "/src/assets/question-marks.avif",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          title: "Aplikacja CyberSenior",
          description:
            "Mobilna aplikacja dla Seniorów, zawierająca kursy oraz narzędzia umożliwiające bezpieczne korzystanie z sieci.",
          image: "/src/assets/security.jpg",
          link: "https://github.com/komorowskiadam/cybersecurity-app",
        },
      ],
    };
  },
  methods: {
    hoverEffect(index) {
      console.log(`Hovered over project: ${index}`);
    },
  },
};
</script>

<style scoped>
.projects {
  padding: 4rem 1rem;
  text-align: center;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
.project-card {
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}
.project-card:hover {
  transform: scale(1.05);
}
.project-image {
  width: 100%;
  height: 100%px;
  object-fit: cover;
}
</style>
