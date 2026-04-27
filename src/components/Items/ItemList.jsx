import React, { useState, useEffect } from 'react';
import { itemsService } from "../../services/api";
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';
import Loading from '../Common/Loading';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const loadItems = async () => {
    try {
      setLoading(true);
      const response = await itemsService.getAll();
      setItems(response.data.data || response.data);
      setError(null);
    } catch (error) {
      setError('Error al cargar los items');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleCreate = async (itemData) => {
    try {
      await itemsService.create(itemData);
      await loadItems();
      setShowForm(false);
    } catch (error) {
      console.error('Error al crear:', error);
    }
  };

  const handleUpdate = async (id, itemData) => {
    try {
      await itemsService.update(id, itemData);
      await loadItems();
      setEditingItem(null);
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este item?')) {
      try {
        await itemsService.delete(id);
        await loadItems();
      } catch (error) {
        console.error('Error al eliminar:', error);
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Mis Items</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary"
        >
          + Nuevo Item
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Crear Item</h2>
            <ItemForm
              onSubmit={handleCreate}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Editar Item</h2>
            <ItemForm
              initialData={editingItem}
              onSubmit={(data) => handleUpdate(editingItem.id, data)}
              onCancel={() => setEditingItem(null)}
            />
          </div>
        </div>
      )}

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay items aún. ¡Crea tu primer item!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onEdit={() => setEditingItem(item)}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;