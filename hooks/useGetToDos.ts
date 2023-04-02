import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { ToDoType } from '@types';

export default function useGetToDos(
  props?: Record<string, any>
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetToDos'],
    () => axios.get('/todos').then((res) => res.data as Array<ToDoType>),
    props
  );
}
