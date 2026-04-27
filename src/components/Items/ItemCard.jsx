import React from 'react';

const ItemCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{item.nombre}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.estado ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {item.estado ? 'Activo' : 'Inactivo'}
          </span>
        </div>
        
        {item.descripcion && (
          <p className="text-gray-600 mb-4">{item.descripcion}</p>
        )}
        
        <div className="text-sm text-gray-500 mb-4">
          <p>Creado: {new Date(item.created_at).toLocaleDateString()}</p>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="flex-1 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Editar
          </button>
          <button
            onClick={onDelete}
            className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;