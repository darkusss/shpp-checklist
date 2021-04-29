import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import messages from './i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './index.css';

library.add(faCog);

const I18n = createI18n({
  locale: 'ua',
  messages,
});

const app = createApp(App);
app.use(I18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
