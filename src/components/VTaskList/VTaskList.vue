<template>
  <div class="container">
    <draggable class="list-group" tag="ul" :list="tasks" group="people" itemKey="taskText">
      <template #item="{ element }">
        <li>
          <VTask
            :task-title="element.taskText"
            @update="changeState(element, $event)"
            :task-response="element.taskResponse"
          />
        </li>
      </template>
    </draggable>
    <VPopup @close="addTask" v-model="isPopupOpen">
      <template #modal-button>
        Add task
      </template>
      <template #modal>
        <div>
          <h2>Add task</h2>
          <label>
            <input type="text" v-model="newTaskValue" />
          </label>
        </div>
      </template>
    </VPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import draggable from 'vuedraggable';
import VPopup from '@/components/reusable/VPopup';
import VTask from '@/components/VTask';
import useTasks from './composables/useTasks';

export default defineComponent({
  name: 'VTaskList',
  components: {
    VTask,
    VPopup,
    draggable
  },
  props: {
    today: Boolean,
    soon: Boolean,
    done: Boolean,
    irrelevant: Boolean
  },
  setup() {
    const { tasks } = useTasks();

    const isPopupOpen = ref(false);
    const newTaskValue = ref('');

    return {
      tasks,
      isPopupOpen,
      newTaskValue
    };
  },
  methods: {
    changeState(el: any, newValue: any) {
      el.taskResponse = newValue;
    },
    addTask() {
      // if string is empty or has many spaces don't add it
      if (!this.newTaskValue.trim()) {
        return;
      }

      this.tasks.push({
        id: Math.random() * 100,
        assigned: 'myself',
        taskText: this.newTaskValue,
        taskResponse: ''
      });

      this.newTaskValue = '';
    }
  }
});
</script>

<style src="./VTaskList.css" scoped />
