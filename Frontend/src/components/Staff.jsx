import React, { useState } from 'react';
import { Users, Clock, Table, ShoppingCart } from 'lucide-react';
import SideBarMenu from './SideBarMenu';
import { AddTeamMemberForm } from './UserManage';

const staffData = [
  {
    id: 1,
    name: 'Andre Carroll',
    startedOn: '12/2/2025',
    ordersTaken: 125,
    avgServingTime: '4 min',
    tables: 1.23,
    orderTotal: 500,
    overallTips: 500
  },
  {
    id: 2,
    name: 'Susan More',
    startedOn: '12/2/2025',
    ordersTaken: 120,
    avgServingTime: '2 hrs',
    tables: 4.58,
    orderTotal: 500,
    overallTips: 500
  },
  {
    id: 3,
    name: 'Kevin Andrew',
    startedOn: '12/2/2025',
    ordersTaken: 354,
    avgServingTime: '3 hrs',
    tables: 78.5,
    orderTotal: 14500,
    overallTips: 14500
  },
  {
    id: 4,
    name: 'William Blake',
    startedOn: '12/2/2025',
    ordersTaken: 1245,
    avgServingTime: '5 hrs',
    tables: 101.12,
    orderTotal: 15800,
    overallTips: 16000
  }
];

const StaffManagement = () => {
  const [activeMenu, setActiveMenu] = React.useState('Staff');
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);

  const handleAddMember = () => {
    setShowAddMemberModal(true);
  };

  return (
    <div className="flex w-full h-full overflow-x-hidden">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center space-x-2">
            <Users className="text-gray-600" />
            <h2 className="text-3xl font-semibold text-black">Staff</h2>
          </div>
          <button 
            onClick={handleAddMember}
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
          >
            + Add team member
          </button>
        </div>
        <div className="p-4 ml-20">
          <div className="flex justify-between mb-4">
            <div className="text-gray-600">Total: 4</div>
            <div className="flex space-x-2">
              <button className="text-black border-b-blue-500 hover:bg-gray-100 px-2 py-1 rounded">
                Download report
              </button>
              <input 
                type="date" 
                className="border text-black rounded px-2 py-1"
                defaultValue="2025-03-25"
              />
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-2">Staff</th>
                <th className="p-2">Started on</th>
                <th className="p-2">
                  <ShoppingCart className="inline-block mr-1" size={16} />
                  Orders taken
                </th>
                <th className="p-2">
                  <Clock className="inline-block mr-1" size={16} />
                  Avg serving time
                </th>
                <th className="p-2">
                  <Table className="inline-block mr-1" size={16} />
                  Tables
                </th>
                <th className="p-2">Order total</th>
                <th className="p-2">Overall tips</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((staff) => (
                <tr key={staff.id} className="border-b text-black hover:bg-gray-50">
                  <td className="p-2 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <span>{staff.name}</span>
                  </td>
                  <td className="p-2">{staff.startedOn}</td>
                  <td className="p-2">{staff.ordersTaken}</td>
                  <td className="p-2">{staff.avgServingTime}</td>
                  <td className="p-2">{staff.tables}</td>
                  <td className="p-2">${staff.orderTotal.toLocaleString()}</td>
                  <td className="p-2">${staff.overallTips.toLocaleString()}</td>
                  <td className="p-2">
                    <button className="text-blue-500 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddMemberModal && (
        <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative">
            <button 
              onClick={() => setShowAddMemberModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <AddTeamMemberForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;