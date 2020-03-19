import Vue from "vue";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import Vuetify from "vuetify/lib";
import { theme } from "./colors";
Vue.use(Vuetify);
// src/plugins/vuetify.js

export default new Vuetify({
  theme,
  icons: {
    iconfont: "md"
  }
});
