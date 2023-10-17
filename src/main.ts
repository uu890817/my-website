import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";

import VueViewer from "v-viewer";
import "viewerjs/dist/viewer.css";

// VueViewer.setDefaults({ 
//   "inline": false, 
//   "button": true, 
//   "navbar": false, 
//   "title": true, 
//   "toolbar": false, 
//   "tooltip": false, 
//   "movable": false, 
//   "zoomable": true, 
//   "rotatable": false, 
//   "scalable": false, 
//   "transition": true, 
//   "fullscreen": true, 
//   "keyboard": false, 
//   "url": "data-source" });

const app = createApp(App);

const pinia = createPinia();

// "inline": false, 
//     "button": true, 
//     "navbar": false, 
//     "title": true, 
//     "toolbar": false, 
//     "tooltip": false, 
//     "movable": false, 
//     "zoomable": true, 
//     "rotatable": false, 
//     "scalable": false, 
//     "transition": true, 
//     "fullscreen": true, 
//     "keyboard": false, 
//     "url": "data-source"

app.use(pinia);
app.use(router);
app.use(naive);
app.use(VueViewer,{
  defaultOptions:{
    "navbar": false, 
    "title": false, 
    "toolbar": false, 
    "keyboard": false, 
  }
});
app.mount("#app");
