import { ref } from 'vue';

interface Task {
  id: number;
  assigned: string;
  taskText: string;
  taskResponse: string | null;
  priority?: number | string,
  deadline: string | Date | null,
}

export default function useTasks() {
  const tasks = ref<Array<Task>>([
    {
      id: 1,
      assigned: 'Who',
      taskText: 'Кормить кота',
      taskResponse: null,
      deadline: null,
    },
    {
      id: 2,
      assigned: 'Is',
      taskText: 'купить книгу',
      taskResponse: null,
      deadline: null,
    },
    {
      id: 3,
      assigned: 'That?',
      taskText: 'забрать посылку',
      taskResponse: null,
      deadline: null,
    }
  ]);

  return {
    tasks
  };
}
