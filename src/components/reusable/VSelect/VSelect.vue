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
  props: {
    selected: [String, Number],
  },
  setup(props, { emit }) {
    const selected = ref(props.selected);

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
