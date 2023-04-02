import { useForm } from 'react-hook-form';
import { useGetToDoById, useUpdateToDoById } from '@hooks';
import { useRouter } from 'next/router';

export default function Edit() {
  const router = useRouter();

  const { id } = router.query;

  const { data, isSuccess } = useGetToDoById(id as string, {
    enabled: !!id,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  if (isSuccess) {
    setValue('todo', data.todo);
    setValue('description', data.description);
    setValue('isCompleted', data.isCompleted);
  }

  const { mutate } = useUpdateToDoById(id as string, {
    onSuccess: () => {
      router.push('/');
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

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
      <input {...register('isCompleted')} type="checkbox" />
      <button type="submit">Update</button>
    </form>
  );
}
