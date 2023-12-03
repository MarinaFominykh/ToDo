import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
// import build from 'next/dist/build';
import { ITask } from '../models/ITask';

//api для получения данных с сервера
export const taskAPI = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ' http://localhost:3000',
  }),
  tagTypes: ['Task'],
  endpoints: (build) => ({
    // Получение списка задач:
    fetchAllTasks: build.query<ITask[], number>({
      query: (limit: number = 5) => ({
        url: '/todos',
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ['Task'],
    }),

    // Создание новой задачи:
    createTask: build.mutation<ITask, ITask>({
      query: (task) => ({
        url: '/todos',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),

    // Обновление задачи:
    updateTask: build.mutation<ITask, ITask>({
      query: (task) => ({
        url: `/todos/${task.id}`,
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),

    // Удаление задачи:
    deleteTask: build.mutation<ITask, ITask>({
      query: (task) => ({
        url: `/todos/${task.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});
