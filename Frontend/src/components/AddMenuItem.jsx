import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

const AddMenuItem = ({ onClose }) => {
  const [name, setName] = useState('Caramel Shake');
  const [category, setCategory] = useState('Breakfast');
  const [price, setPrice] = useState('76.00');
  const [discount, setDiscount] = useState('5');
  const [availability, setAvailability] = useState('Available');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // Here you would typically handle saving the menu item
    // For now, we'll just close the modal
    onClose();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
      
      <div className="space-y-4">
        <div className="mb-4 relative">
          {image ? (
            <img 
              src={image} 
              alt="Menu Item" 
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <input 
                  type="file" 
                  accept="image/*"
                  className="hidden" 
                  id="imageUpload"
                  onChange={handleImageUpload}
                />
                <label 
                  htmlFor="imageUpload" 
                  className="cursor-pointer flex flex-col items-center"
                >
                  <UploadCloud className="text-gray-500 w-12 h-12" />
                  <span className="mt-2 text-gray-500">Upload food image</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snacks</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <div className="flex items-center">
            <span className="mr-2">AED</span>
            <input 
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Discount
          </label>
          <input 
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Availability
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="availability"
                value="Available"
                checked={availability === 'Available'}
                onChange={() => setAvailability('Available')}
                className="form-radio"
              />
              <span className="ml-2">Available</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="availability"
                value="Out of stock"
                checked={availability === 'Out of stock'}
                onChange={() => setAvailability('Out of stock')}
                className="form-radio"
              />
              <span className="ml-2">Out of stock</span>
            </label>
          </div>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={handleSave}
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Save
          </button>
          <button 
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMenuItem;