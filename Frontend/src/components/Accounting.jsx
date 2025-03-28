import React, { useState } from 'react';
import SideBarMenu from './SideBarMenu';

const Accounting = () => {
  const [activeMenu, setActiveMenu] = useState('Accounting');
  
  return (
    <div className="flex w-full h-full">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold text-black mb-6">Accounting</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg text-black font-semibold mb-2">Walter tips</h2>
            <p className="text-gray-600">Add wages, edit tips staff</p>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg text-black font-semibold mb-2">Delivery guy payments</h2>
            <p className="text-gray-600">Calculate delivery crew earnings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;