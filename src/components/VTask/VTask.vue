<template>
  <div class="task-container">
    <label>{{ taskTitle }}</label>
    <VEditableInput @update="updateValue" :task-response="taskResponse" />
    <VSelect v-model="selectedValue">
      <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
    </VSelect>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import VEditableInput from '@/components/reusable/VEditableInput';
import VSelect from '@/components/reusable/VSelect';

export default defineComponent({
  name: 'VTask',
  components: {
    VEditableInput,
    VSelect
  },
  props: {
    taskTitle: String,
    taskResponse: String
  },
  setup() {
    const selectedValue = ref('');
    const options = ['готово на 100%', 'недоделано', 'нечего делать'];

    watchEffect(() => console.log(selectedValue.value));

    return {
      selectedValue,
      options
    };
  },
  methods: {
    updateValue(value: string) {
      this.$emit('update', value);
    }
  }
});
</script>

<style src="./VTask.css" scoped />
