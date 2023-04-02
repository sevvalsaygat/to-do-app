import { ToDo } from '@components';

export default function Home() {
  return (
    <div className="flex justify-center align-center">
      <div className="w-1/2 flex flex-col">
        <button className="p-3 border border-gray-800 bg-gray-500 rounded-sm mb-52 ">
          New ToDo
        </button>
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
            <ToDo />
          </tbody>
        </table>
      </div>
    </div>
  );
}
