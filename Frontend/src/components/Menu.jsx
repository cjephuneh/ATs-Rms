import React, { useState } from 'react';
import SideBarMenu from './SideBarMenu';
import AddMenuItem from './AddMenuItem'; // Import the AddMenuItem component

const menuItems = [
  {
    id: 1,
    name: "Caramel cake",
    category: "Dessert",
    price: "$5.50",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Pasta",
    category: "Main Course",
    price: "$12.99",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Caramel shake",
    category: "Drinks",
    price: "$4.50",
    image: "https://via.placeholder.com/150"
  }
];

const MenuManagement = () => {
  const [activeMenu, setActiveMenu] = useState('Menu')
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddMenuItemModalOpen, setIsAddMenuItemModalOpen] = useState(false);

  const filteredItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openAddMenuItemModal = () => {
    setIsAddMenuItemModalOpen(true);
  };

  const closeAddMenuItemModal = () => {
    setIsAddMenuItemModalOpen(false);
  };

  return (
    <div className="flex w-full text-black h-screen relative">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-grow p-4 bg-gray-50 overflow-auto">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Menu</h1>
            <input 
              type="text"
              placeholder="Search menu items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border placeholder:text-black rounded-md w-64"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Item</th>
                  <th className="text-left p-2">Category</th>
                  <th className="text-left p-2">Price</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 mr-2 object-cover rounded"
                      />
                      {item.name}
                    </td>
                    <td className="p-2">{item.category}</td>
                    <td className="p-2">{item.price}</td>
                    <td className="p-2">
                      <div className="flex space-x-2">
                        <button className="px-2 py-1 bg-gray-100 border rounded">
                          Edit
                        </button>
                        <button className="px-2 py-1 bg-red-500 text-white rounded">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-4">
            <button 
              onClick={openAddMenuItemModal}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Add New Menu Item
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isAddMenuItemModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl relative max-w-md w-full">
            {/* Close Button */}
            <button 
              onClick={closeAddMenuItemModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>

            {/* AddMenuItem Component */}
            <AddMenuItem onClose={closeAddMenuItemModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuManagement;