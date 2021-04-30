<template>
  <div class="bg-blue-400 h-screen">
    <h1 class="text-4xl font-semibold ml-10">{{ $t('message.heading') }}</h1>
    <div class="xl:container md:container sm:container mx-auto px-2">
      <h2 class="text-lg">{{ $t('message.todayTasks') }}</h2>
      <VTaskList today />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VTaskList from '@/components/VTaskList';

export default defineComponent({
  name: 'App',
  components: {
    VTaskList
  }
});
</script>
