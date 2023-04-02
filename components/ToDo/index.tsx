import { ToDoType } from '@types';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useDeleteToDoById } from '@hooks';
import { useRouter } from 'next/router';

type ToDoProps = {
  todo: ToDoType;
};

export default function ToDo({ todo }: ToDoProps) {
  const router = useRouter();

  const { mutate } = useDeleteToDoById({
    onSuccess: () => {
      router.reload();
    },
  });

  return (
    <tr>
      <td>{todo.todo}</td>
      <td>{todo.description}</td>
      <td>
        {todo.isCompleted && (
          <CheckCircleIcon className="text-green-500 h-5 w-5" />
        )}
        {!todo.isCompleted && <XCircleIcon className="text-red-500 h-5 w-5" />}
      </td>
      <td>
        <Link href={`/todos/edit/${todo.id}`}>Düzenle</Link>
        <button
          onClick={() => {
            mutate(todo.id);
          }}
        >
          Sil
        </button>
      </td>
    </tr>
  );
}
