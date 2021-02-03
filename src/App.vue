<template>
  <div>
    <h1>Checklist beginning</h1>
    <h2>Tasks for today</h2>
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

<style src="./styles/global.css" />
