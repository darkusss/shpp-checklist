<template>
  <div>
    <h1>{{ $t('message.heading') }}</h1>
    <h2>{{ $t('message.todayTasks') }}</h2>
    <VTaskList today />
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
