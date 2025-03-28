import React, { useState } from 'react';
import { ChevronDown, Download, Search } from 'lucide-react';
import SideBarMenu from './SideBarMenu';

const Reservations = () => {
  const [activeMenu, setActiveMenu] = useState('Reservations');
  const [reservations, setReservations] = useState([
    {
      date: '12/12/2025',
      time: '8:00am',
      clientName: 'Anne Niklas',
      phoneNo: '+254137719',
      table: 4,
      guests: 4,
      note: '',
      tableStatus: 'Pending'
    },
    {
      date: '12/12/2025',
      time: '6:32am',
      clientName: 'Nancy Nairobi',
      phoneNo: '+254137719',
      table: 5,
      guests: 3,
      note: '2 baby chairs',
      tableStatus: 'Seated'
    },
    {
      date: '12/12/2025',
      time: '5:26am',
      clientName: 'Caroline Natala',
      phoneNo: '+254137719',
      table: 7,
      guests: 8,
      note: '',
      tableStatus: 'Booked'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Seated': return 'bg-green-100 text-green-800';
      case 'Booked': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex w-full h-full overflow-x-hidden">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="bg-white ml-38 rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-4xl font-bold -ml-34 text-gray-800">Reservations</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-8 pr-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-2 top-3 text-gray-400" size={18} />
            </div>
            <div className="flex items-center space-x-2 text-black bg-blue-50 px-3 py-2 rounded-md cursor-pointer">
              <span>12/12/2025</span>
              <ChevronDown size={16} className="text-gray-600" />
            </div>
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <Download size={16} />
              <span>Download</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                {['Date', 'Time', 'Client name', 'Phone No.', 'Table', 'Guests', 'Note', 'Table Status', 'Action'].map((header) => (
                  <th key={header} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reservations.map((reservation, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.date}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.time}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{reservation.clientName}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.phoneNo}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.table}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.guests}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.note}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(reservation.tableStatus)}`}>
                      {reservation.tableStatus}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reservations;