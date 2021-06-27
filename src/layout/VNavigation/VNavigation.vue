<template>
  <div class="bg-gray-50 max-w-sm w-full p-10 rounded-2xl shadow-md max-h-screen">
    <h2 class="text-3xl font-bold text-blue-600">{{heading}}</h2>
    <h6 class="text-md text-gray-500 mt-10">Main Menu</h6>
    <nav>
      <ul>
        <li v-for="navItem in navList" :key="navItem.label" class="font-semibold bg-gradient-to-r text-gray-500 hover:from-blue-200 hover:text-blue-600 rounded-xl" >
          <VNavLink :to="navItem.link" class="flex flex-row items-center pl-2" active-class="text-blue-700 bg-gradient-to-r from-blue-300 rounded-xl">
            <span v-if="navItem.icon">{{navItem.icon}}</span>
            <fa icon="clipboard-list" class="mr-3" />
            <span class="block py-4 flex-auto">{{navItem.label}}</span>
          </VNavLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VNavLink from '@/components/reusable/VNavLink';

export default defineComponent({
  name: 'VNavigation',
  components: {
    VNavLink,
  },
  props: {
    navList: Array,
    heading: String,
  },
  setup() {
  },
  methods: {
  }
});
</script>
