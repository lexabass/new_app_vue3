import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import router from '@/router/router';
import directives from '@/directives';
import store from '@/store';
import axios from 'axios'
const app = createApp(App).use(router);

Object.keys(components).forEach(key => {
  app.component(key, components[key])
})

directives.forEach(directive => {
  app.directive(directive.name, directive)
})

// components.forEach(component => {
//   app.component(component.name, component)
// });  - in video

//components.forEach doesnt work

app
  .use(router)
  .use(store)
  .mount('#app');
