import React, { useState } from 'react';
import SideBarMenu from './SideBarMenu';

const TablesPage = () => {
  // State for tables management
  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1', status: 'Occupied' },
    { id: 2, name: 'Table 2', status: 'Reserved' },
    { id: 3, name: 'Table 3', status: 'Free' }
  ]);

  // State for dialog and form
  const [isAddTableDialogOpen, setIsAddTableDialogOpen] = useState(false);
  const [newTableName, setNewTableName] = useState('');
  const [newTableCapacity, setNewTableCapacity] = useState('');
  const [newTableStatus, setNewTableStatus] = useState('Free'); // Default status
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  // Handler for adding a new table
  const handleAddTable = (e) => {
    e.preventDefault();
    
    // Input validation
    if (!newTableName || !newTableCapacity) {
      alert('Please fill in all fields');
      return;
    }

    // Create new table object
    const newTable = {
      id: tables.length + 1,
      name: newTableName,
      capacity: newTableCapacity,
      status: newTableStatus
    };

    // Update tables state
    setTables(prevTables => [...prevTables, newTable]);
    
    // Reset form and close dialog
    resetForm();
  };

  // Reset form and close dialog
  const resetForm = () => {
    setNewTableName('');
    setNewTableCapacity('');
    setNewTableStatus('Free');
    setIsAddTableDialogOpen(false);
  };

  // Render table status color
  const getTableStatusColor = (status) => {
    switch (status) {
      case 'Occupied': return 'bg-red-100 text-black';
      case 'Reserved': return 'bg-yellow-100 text-black';
      case 'Free': return 'bg-green-100 text-black';
      default: return '';
    }
  };

  // Render table list
  const renderTableList = () => {
    return tables.map((table) => (
      <div 
        key={table.id} 
        className={`p-4 rounded-lg border ${getTableStatusColor(table.status)}`}
      >
        <h2 className="text-lg font-semibold">{table.name}</h2>
        <p>Status: {table.status}</p>
        
      </div>
    ));
  };

  // Render add table dialog
  const renderAddTableDialog = () => {
    if (!isAddTableDialogOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl w-96">
          <h2 className="text-xl text-black font-semibold mb-4">Create New Table</h2>
          <form onSubmit={handleAddTable} className="space-y-4">
            <div>
              <label htmlFor="tableName" className="block text-black mb-2">Table Name</label>
              <input 
                id="tableName"
                type="text"
                value={newTableName}
                onChange={(e) => setNewTableName(e.target.value)}
                placeholder="Enter table name"
                className="w-full px-3 py-2 border text-black rounded"
              />
            </div>
            <div>
              <label htmlFor="tableCapacity" className="block text-black mb-2">Table Capacity</label>
              <input 
                id="tableCapacity"
                type="number"
                value={newTableCapacity}
                onChange={(e) => setNewTableCapacity(e.target.value)}
                placeholder="Enter table capacity"
                className="w-full px-3 py-2 border text-black rounded"
              />
            </div>
            <div>
              <label htmlFor="tableStatus" className="block text-black mb-2">Table Status</label>
              <select 
                id="tableStatus"
                value={newTableStatus}
                onChange={(e) => setNewTableStatus(e.target.value)}
                className="w-full px-3 py-2 border text-black rounded"
              >
                <option value="Free">Free</option>
                <option value="Occupied">Occupied</option>
                <option value="Reserved">Reserved</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button 
                type="button"
                onClick={() => setIsAddTableDialogOpen(false)}
                className="bg-gray-200 text-red px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-teal-500 text-green px-4 py-2 rounded hover:bg-teal-600 transition"
              >
                Create Table
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full h-full overflow-x-hidden">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl text-black font-bold">Tables</h1>
          <button 
            onClick={() => setIsAddTableDialogOpen(true)}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            + Add Table
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {renderTableList()}
        </div>

        {renderAddTableDialog()}
      </div>
    </div>
  );
};

export default TablesPage;