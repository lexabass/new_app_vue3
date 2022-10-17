import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from '@/router/router';

const app = createApp(App).use(router);

Object.keys(components).forEach(key => {
  app.component(key, components[key])
})

// Object.entries(components).forEach(component => {
//   app.component(component.name, component)
// });  - in video

//components.forEach doesnt work

app
  .use(router)
  .mount('#app');
