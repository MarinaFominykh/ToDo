import { FC, MouseEvent } from 'react';
import { ITask } from '../../models/ITask';
import './Task.scss';

interface TaskProps {
  task: ITask;
  remove: (task: ITask) => void;
  update: (task: ITask) => void;
}
const Task: FC<TaskProps> = ({ task, remove, update }) => {
  // Обработчик удаления задачи:
  const handleRemove = (event: MouseEvent) => {
    event.stopPropagation();
    remove(task);
  };

  // Обработчик редактирования задачи:
  const handleUpdate = (event: MouseEvent) => {
    const title = prompt('Введите задачу') || '';
    update({ ...task, title });
  };

  return (
    <>
      <li className='task'>
        <p className='task__title'>{task.title}</p>
        <div className='task__buttons'>
          <button className='button' onClick={handleRemove}>
            Удалить
          </button>
          <button className='button' onClick={handleUpdate}>
            Редактировать
          </button>
        </div>
      </li>
    </>
  );
};

export default Task;
