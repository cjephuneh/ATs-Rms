import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import SideBarMenu from './SideBarMenu';
import AddMenuItem from './AddMenuItem';

const MenuManagement = () => {
  const [activeMenu, setActiveMenu] = useState('Menu');
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddMenuItemModalOpen, setIsAddMenuItemModalOpen] = useState(false);
  const [isEditMenuItemModalOpen, setIsEditMenuItemModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base API URL
  const API_URL = "http://localhost:8080";

  // Fetch menu items from API
  const fetchMenuItems = () => {
    setLoading(true);
    setError(null);
    
    console.log("Fetching menu from:", `${API_URL}/api/menu`);
    
    axios.get(`${API_URL}/api/menu`)
      .then(response => {
        console.log("Fetch success:", response.data);
        setMenuItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching menu items:", error);
        setError("Failed to load menu items. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // Add a new menu item
  const handleAddMenuItem = (newItem) => {
    setLoading(true);
    console.log("Adding item to:", `${API_URL}/api/menu`);
    console.log("Item data:", newItem);
    
    axios.post(`${API_URL}/api/menu`, newItem)
      .then(response => {
        console.log("Add success:", response.data);
        setMenuItems([...menuItems, response.data]);
        setIsAddMenuItemModalOpen(false);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error adding menu item:", error);
        setError("Failed to add menu item. Please try again.");
        setLoading(false);
      });
  };

  // Open edit modal with current item data
  const openEditModal = (item) => {
    setCurrentItem(item);
    setIsEditMenuItemModalOpen(true);
  };

  // Update menu item
  const handleEditMenuItem = (updatedItem) => {
    setLoading(true);
    console.log("Updating item at:", `${API_URL}/api/menu/${updatedItem.id}`);
    console.log("Updated data:", updatedItem);
    
    axios.put(`${API_URL}/api/menu/${updatedItem.id}`, updatedItem)
      .then(response => {
        console.log("Update success:", response.data);
        setMenuItems(menuItems.map(item => 
          item.id === updatedItem.id ? response.data : item
        ));
        setIsEditMenuItemModalOpen(false);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error updating menu item:", error);
        setError("Failed to update menu item. Please try again.");
        setLoading(false);
      });
  };

  // Delete menu item with confirmation
  const handleDeleteMenuItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setLoading(true);
      
      const deleteUrl = `${API_URL}/api/menu/${id}`;
      console.log("Deleting item at:", deleteUrl);
      
      axios.delete(deleteUrl)
        .then(response => {
          console.log("Delete success:", response.data);
          setMenuItems(menuItems.filter(item => item.id !== id));
          setLoading(false);
        })
        .catch(error => {
          console.error("Error deleting menu item:", error.response || error);
          setError(`Failed to delete menu item. Status: ${error.response?.status || 'Unknown'}`);
          setLoading(false);
        });
    }
  };

  // Filtered items based on search
  const filteredItems = menuItems.filter(item => 
    item.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Edit Menu Item Component
  const EditMenuItem = ({ item, onSave, onClose }) => {
    const [formData, setFormData] = useState({ 
      ...item,
      availability: item.availability !== false, // Default to true if undefined
      discount: item.discount || 0,
      description: item.description || ''
    });
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
      // Fetch categories for dropdown
      axios.get(`${API_URL}/api/categories`)
        .then(response => {
          setCategories(response.data);
        })
        .catch(error => {
          console.error("Error fetching categories:", error);
        });
    }, []);
    
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : 
                name === 'price' || name === 'discount' ? parseFloat(value) || 0 : 
                value
      });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        // Check if the category exists
        const categoryExists = categories.some(
          cat => cat.name.toLowerCase() === formData.category.toLowerCase()
        );
        
        // If category doesn't exist, create it first
        if (!categoryExists && formData.category.trim() !== '') {
          console.log("Creating new category:", formData.category);
          
          await axios.post(`${API_URL}/api/categories`, { 
            name: formData.category 
          });
        }
        
        // Now save the updated menu item
        onSave(formData);
        
      } catch (error) {
        console.error("Error in update process:", error);
        // Continue with update anyway - let parent component handle errors
        onSave(formData);
      }
    };
    
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Menu Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category *</label>
            <input
              type="text"
              name="category"
              value={formData.category || ''}
              onChange={handleChange}
              list="edit-categories"
              className="w-full p-2 border rounded"
              required
              placeholder="Enter or select category"
            />
            <datalist id="edit-categories">
              {categories.map((category, index) => (
                <option key={index} value={category.name} />
              ))}
            </datalist>
            <p className="text-xs text-gray-500 mt-1">
              New categories will be created automatically
            </p>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price ($) *</label>
            <input
              type="number"
              name="price"
              value={formData.price || ''}
              onChange={handleChange}
              step="0.01"
              min="0"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={formData.discount || 0}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.1"
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="availability"
                checked={formData.availability !== false}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm font-medium">Available</span>
            </label>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        <Header />
        
        <div className="flex-grow p-4 mb-96 bg-gray-50 overflow-auto">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">Menu</h1>
              <input 
                type="text"
                placeholder="Search menu items"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border rounded-md w-64"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
                <button 
                  className="float-right font-bold"
                  onClick={() => setError(null)}
                >
                  ×
                </button>
              </div>
            )}

            {/* Loading State */}
            {loading ? (
              <div className="text-center py-4">
                <p>Loading...</p>
              </div>
            ) : (
              <>
                {/* Menu Items Table */}
                <div className="overflow-x-auto">
                  {filteredItems.length > 0 ? (
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Item</th>
                          <th className="text-left p-2">Category</th>
                          <th className="text-left p-2">Price</th>
                          <th className="text-left p-2">Availability</th>
                          <th className="text-left p-2">Discount</th>
                          <th className="text-left p-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredItems.map((item) => (
                          <tr key={item.id} className="border-b">
                            <td className="p-2 flex items-center">
                              {item.image ? (
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-12 h-12 mr-2 object-cover rounded"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/50";
                                  }}
                                />
                              ) : (
                                <div className="w-12 h-12 mr-2 bg-gray-200 rounded flex items-center justify-center">
                                  No img
                                </div>
                              )}
                              {item.name}
                            </td>
                            <td className="p-2">{item.category}</td>
                            <td className="p-2">${(item.price || 0).toFixed(2)}</td>
                            <td className="p-2">
                              <span className={`px-2 py-1 rounded text-xs ${
                                item.availability !== false ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {item.availability !== false ? 'Available' : 'Unavailable'}
                              </span>
                            </td>
                            <td className="p-2">
                              {item.discount > 0 ? `${item.discount}%` : '-'}
                            </td>
                            <td className="p-2">
                              <div className="flex space-x-2">
                                <button 
                                  onClick={() => openEditModal(item)}
                                  className="px-2 py-1 bg-blue-100 hover:bg-blue-200 border rounded">
                                  Edit
                                </button>
                                <button 
                                  onClick={() => handleDeleteMenuItem(item.id)}
                                  className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded">
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-4">
                      <p>No menu items found{searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
                    </div>
                  )}
                </div>

                {/* Add Menu Item Button */}
                <div className="text-center mt-4">
                  <button 
                    onClick={() => setIsAddMenuItemModalOpen(true)}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
                    Add New Menu Item
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Add Menu Item Modal */}
      {isAddMenuItemModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl relative max-w-md w-full">
            <button 
              onClick={() => setIsAddMenuItemModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
              ✕
            </button>
            <AddMenuItem onClose={() => setIsAddMenuItemModalOpen(false)} onAdd={handleAddMenuItem} />
          </div>
        </div>
      )}

      {/* Edit Menu Item Modal */}
      {isEditMenuItemModalOpen && currentItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl relative max-w-md w-full">
            <button 
              onClick={() => setIsEditMenuItemModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
              ✕
            </button>
            <EditMenuItem 
              item={currentItem} 
              onClose={() => setIsEditMenuItemModalOpen(false)} 
              onSave={handleEditMenuItem} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuManagement;