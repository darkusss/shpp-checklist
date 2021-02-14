<template>
  <div class="container">
    <div>
      <draggable
          class="list-group"
          tag="ul"
          :list="tasks"
          group="users"
          itemKey="id"
      >
        <template #item="{ element }">
          <li>
            <VTask
                v-model="element.taskResponse"
                :task-title="element.taskText"
            />
          </li>
        </template>
      </draggable>
    </div>
    <VPopup @submit="addTask" v-model="isPopupOpen" @keyup.esc="isPopupOpen = false">
      <template #modal-button>
        {{ $t('message.addTaskButton') }}
      </template>
      <template #modal>
        <div>
          <h2>{{ $t('message.addTaskTitle') }}</h2>
          <label>
            <input type="text" v-model="newTaskValue"/>
          </label>
          <div>
            <span>{{ $t('message.deadline') }}</span>
            <Datepicker v-model="currentDate"/>
          </div>
        </div>
      </template>
    </VPopup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import draggable from 'vuedraggable';
import Datepicker from 'vue3-datepicker';
import useTasks from './composables/useTasks';
import VPopup from '@/components/reusable/VPopup';
import VTask from '@/components/VTask';

export default defineComponent({
  name: 'VTaskList',
  components: {
    VTask,
    VPopup,
    draggable,
    Datepicker,
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
    const currentDate = ref(new Date());

    return {
      tasks,
      isPopupOpen,
      newTaskValue,
      currentDate,
    };
  },
  methods: {
    addTask() {
      // if this string is empty or has many spaces don't add it
      if (!this.newTaskValue.trim()) {
        return;
      }

      this.tasks.push({
        id: Math.random() * 100,
        assigned: 'Bob',
        taskText: this.newTaskValue,
        taskResponse: null,
        deadline: this.currentDate,
      });

      this.newTaskValue = '';
    }
  }
});
</script>

<style src="./VTaskList.css" scoped/>
