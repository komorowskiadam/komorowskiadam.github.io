<template>
  <section
    id="contact"
    class="contact py-20 bg-gradient-to-t from-primary to-secondary text-white"
  >
    <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">Kontakt</h2>
    <div class="social-icons flex justify-center space-x-6">
      <a
        href="https://github.com/komorowskiadam"
        target="_blank"
        class="social-link"
      >
        <img
          src="../assets/icons/github.svg"
          alt="GitHub"
          class="w-12 h-12 hover:scale-110 transition"
        />
      </a>
      <a
        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fadam-komorowski-810776260%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3l88Yi50RRPEzimaq2MZCQBoy1F0Kp8urEgJQUu-QPYW-8tARPaWuULx0_aem_XlKfYENrflGv0juYIWe9Ug&h=AT3HcYg7BAF2szukf7qeMdGtS74bzm-Nq_KZwMJ4gBQ3OoXYkiJqdJUqqDwbXt8YXz2kM4_6bzJ4O4GSyCEF7MFom4iASy_dwRwbnNjyJclhxS4VTj64g4pBT3PCbw"
        target="_blank"
        class="social-link"
      >
        <img
          src="../assets/icons/linkedin.svg"
          alt="LinkedIn"
          class="w-12 h-12 hover:scale-110 transition"
        />
      </a>
      <a href="mailto:komorowski.adam2000@gmail.com" class="social-link">
        <img
          src="../assets/icons/gmail.svg"
          alt="E-mail"
          class="w-12 h-12 hover:scale-110 transition"
        />
      </a>
    </div>
  </section>
  <footer class="bg-primary text-white py-6 text-center">
    &copy; 2024 Adam Komorowski. Wszystkie prawa zastrzeżone.
  </footer>
</template>

<style scoped>
.social-link:hover {
  filter: brightness(1.2);
}
</style>
