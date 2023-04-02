import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { CreateToDoType, ToDoType } from '@types';

export default function useDeleteToDoById(
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (id) => axios.delete(`/todos/${id}`).then((res) => res.data as ToDoType),
    props
  );
}
