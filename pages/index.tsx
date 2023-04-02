import { ToDo } from '@components';
import Link from 'next/link';
import { useGetToDos } from '@hooks';
import { ToDoType } from '@types';

export default function Home() {
  const { data, isSuccess } = useGetToDos();

  return (
    <div className="flex justify-center align-center">
      <div className="w-1/2 flex flex-col">
        <Link
          href="/todos/new"
          className="p-3 border border-gray-800 bg-gray-500 rounded-sm mb-52 "
        >
          New ToDo
        </Link>
        <table className="table-auto">
          <thead>
            <tr>
              <th>ToDo</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              data.map((todo: ToDoType) => <ToDo todo={todo} key={todo.id} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
