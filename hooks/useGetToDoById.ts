import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { ToDoType } from '@types';

export default function useGetToDoById(
  id: string,
  props?: Record<string, any>
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetToDoById'],
    () => axios.get(`/todos/${id}`).then((res) => res.data as ToDoType),
    props
  );
}
