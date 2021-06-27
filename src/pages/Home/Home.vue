<template>
  <div class="ml-20 w-full">
    <h1 class="text-4xl text-blue-900 font-semibold">{{ $t('message.heading') }}</h1>
    <div class="xl:container md:container sm:container mx-auto">
      <h2 class="text-lg text-blue-800">{{ $t('message.todayTasks') }}</h2>
      <VTaskList today />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import VTaskList from '@/components/VTaskList';

export default defineComponent({
  name: 'Home',
  components: {
    VTaskList,
  },

});
</script>
