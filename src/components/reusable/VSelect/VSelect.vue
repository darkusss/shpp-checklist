<template>
  <div>
    <select v-model="computedSelected">
      <slot />
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'VSelect',
  setup(_, { emit }) {
    const selected = ref('');

    const computedSelected = computed({
      get: () => selected.value,
      set: value => {
        selected.value = value;
        emit('update:modelValue', value);
      }
    });

    return {
      computedSelected
    };
  }
});
</script>
