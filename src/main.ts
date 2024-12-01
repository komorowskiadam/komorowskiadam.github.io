import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

createApp(App).mount("#app");
