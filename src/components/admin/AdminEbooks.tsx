import React from 'react';
import { useAdminData } from '@/data/mockData';

const AdminEbooks = () => {
  const { ebooks, addEbook, updateEbook, deleteEbook } = useAdminData();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Ebook Management</h2>
      <div className="space-y-4">
        {ebooks.map(ebook => (
          <div key={ebook.id} className="border rounded-lg p-4">
            <h3 className="font-medium">{ebook.title}</h3>
            <p className="text-sm text-gray-600">{ebook.author}</p>
            <div className="mt-2 flex space-x-2">
              <button 
                className="text-blue-600 hover:text-blue-800"
                onClick={() => updateEbook(ebook.id, ebook)}
              >
                Edit
              </button>
              <button 
                className="text-red-600 hover:text-red-800"
                onClick={() => deleteEbook(ebook.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEbooks;