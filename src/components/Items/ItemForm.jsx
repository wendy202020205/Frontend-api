import React, { useState } from 'react';

const ItemForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: initialData.nombre || '',
    descripcion: initialData.descripcion || '',
    estado: initialData.estado !== undefined ? initialData.estado : true,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre.trim()) {
      alert('El nombre es requerido');
      return;
    }
    
    setLoading(true);
    await onSubmit(formData);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre *
        </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Nombre del item"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows="3"
          className="input-field"
          placeholder="Descripción del item"
        />
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          name="estado"
          checked={formData.estado}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-900">
          Activo
        </label>
      </div>
      
      <div className="flex space-x-2 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 btn-primary disabled:opacity-50"
        >
          {loading ? 'Guardando...' : 'Guardar'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 btn-secondary"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ItemForm;