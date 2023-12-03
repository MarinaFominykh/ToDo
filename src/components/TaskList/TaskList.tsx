import { taskAPI } from '../../services/TaskService';
import Task from '../Task/Task';
import { ITask } from '../../models/ITask';
import './TaskList.scss';

const TaskList = () => {
  const { data: tasks, error, isLoading } = taskAPI.useFetchAllTasksQuery(100);
  const [createTask, {}] = taskAPI.useCreateTaskMutation();
  const [updateTask, {}] = taskAPI.useUpdateTaskMutation();
  const [deleteTask, {}] = taskAPI.useDeleteTaskMutation();

  // Обработчик создания новой задачи:
  const handleCreate = async () => {
    const title = prompt('Введите задачу');
    await createTask({ title } as ITask);
  };

  // Обработчик редактирования задачи:
  const handleUpdate = (task: ITask) => {
    updateTask(task);
  };

  // Обработчик удаления задачи:
  const handleRemove = (task: ITask) => {
    deleteTask(task);
  };
  return (
    <section className='tasks'>
      <button className='button' onClick={handleCreate}>
        Создать задачу
      </button>
      <ul className='tasks__list'>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {tasks?.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={handleRemove}
            update={handleUpdate}
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
