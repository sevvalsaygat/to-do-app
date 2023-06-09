import { useForm } from 'react-hook-form';
import { useCreateToDo } from '@hooks';
import { useRouter } from 'next/router';

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useCreateToDo({
    onSuccess: () => {
      router.push('/');
    },
  });

  const onSubmit = (data: any) => {
    mutate({
      isCompleted: false,
      ...data,
    });
  };

  const router = useRouter();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <input {...register('todo', { required: true })} placeholder="todo" />
        {errors.todo && (
          <span className="text-red-500">this field is required</span>
        )}
      </div>
      <textarea
        {...register('description')}
        placeholder="description"
      ></textarea>
      <button type="submit">Created</button>
    </form>
  );
}
