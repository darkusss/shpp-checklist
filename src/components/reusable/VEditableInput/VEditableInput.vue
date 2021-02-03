<template>
  <div>
    <input
      v-if="isEditable"
      :value="taskResponse"
      @blur="emitInputValue($event.target.value)"
      @keyup.enter="emitInputValue($event.target.value)"
      v-focus
    />
    <label v-else @click="isEditable = true"> {{ taskResponse }} </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'VEditableInput',
  props: {
    taskResponse: String
  },
  setup() {
    const inputText = ref('');
    const isEditable = ref(false);

    return {
      inputText,
      isEditable
    };
  },
  methods: {
    emitInputValue(value: string) {
      this.isEditable = false;
      this.inputText = value;
      this.$emit('update', this.inputText);
    }
  },
  directives: {
    focus: function(el: HTMLElement) {
      el.focus();
    }
  }
});
</script>

<style src="./VEditableInput.css" scoped />
