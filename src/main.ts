import "./assets/main.css";
import "./assets/shared.css";
import FontAwesomeIcon from "@/lib/fontawesome-icons";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
