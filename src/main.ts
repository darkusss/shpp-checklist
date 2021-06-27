import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import messages from './i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from '@/router';
import './index.css';

library.add(faCog, faClipboardList);

const I18n = createI18n({
  locale: 'ru',
  messages,
});

const app = createApp(App);
app.use(I18n);
app.use(router);
app.component('fa', FontAwesomeIcon);
app.mount('#app');
