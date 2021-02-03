import { ref } from 'vue';

interface Task {
  id: number;
  assigned: string;
  taskText: string;
  taskResponse: string;
}

export default function useTasks() {
  const tasks = ref<Array<Task>>([
    {
      id: 1,
      assigned: 'Tamara',
      taskText: 'Кормить кота',
      taskResponse: 'v'
    },
    {
      id: 2,
      assigned: 'Vlad',
      taskText: 'купить книгу',
      taskResponse: ')))'
    }
  ]);

  return {
    tasks
  };
}
