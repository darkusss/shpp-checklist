<template>
  <div class="bg-gray-200 h-screen flex flex-row p-5">
    <VNavigation heading="Checklist" :navList="navList"/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VNavigation from '@/layout/VNavigation';

export default defineComponent({
  name: 'App',
  components: {
    VNavigation
  },
  setup() {
    const navList = ref([
      {
        label: 'Home',
        link: '/',
      },
      {
        label: 'About',
        link: '/about',
      },
    ]);

    return {
      navList,
    };
  },
});
</script>
