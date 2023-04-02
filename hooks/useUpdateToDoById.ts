import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { CreateToDoType, ToDoType } from '@types';

export default function useUpdateToDoById(
  id: string,
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (data: any) =>
      axios
        .patch(`/todos/${id}`, data as CreateToDoType)
        .then((res) => res.data as ToDoType),
    props
  );
}
