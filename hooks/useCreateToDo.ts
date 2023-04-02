import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { CreateToDoType, ToDoType } from '@types';

export default function useCreateToDo(
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (data: any) =>
      axios
        .post('/todos', data as CreateToDoType)
        .then((res) => res.data as ToDoType),
    props
  );
}
