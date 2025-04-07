import React, { useState } from 'react';
import { ChevronDown, Download, Search, Filter, Calendar, Plus, MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import SideBarMenu from './SideBarMenu';
import Header from './Header';

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
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-amber-100 text-amber-800';
      case 'Seated': return 'bg-emerald-100 text-emerald-800';
      case 'Booked': return 'bg-sky-100 text-sky-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return '⏳';
      case 'Seated': return '✓';
      case 'Booked': return '📅';
      default: return '';
    }
  };

  const toggleActionMenu = (index) => {
    if (isActionMenuOpen === index) {
      setIsActionMenuOpen(null);
    } else {
      setIsActionMenuOpen(index);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 mb-64 p-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Reservations</h2>
                <p className="text-gray-500 mt-1">Manage your restaurant bookings</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={16} />
                  <span>New Reservation</span>
                </button>
              </div>
            </div>

            <div className="p-6 border-b bg-white">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative flex-grow max-w-md">
                  <input 
                    type="text" 
                    placeholder="Search by name, phone or table" 
                    className="w-full pl-10 pr-4 py-2.5 text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <div className="flex items-center gap-2 text-gray-700 bg-white border border-gray-200 px-4 py-2.5 rounded-lg cursor-pointer hover:bg-gray-50">
                  <Calendar size={18} className="text-gray-500" />
                  <span>12/12/2025</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
                <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download size={18} />
                  <span>Export</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    {['Date', 'Time', 'Client name', 'Table', 'Guests', 'Note', 'Status', 'Actions'].map((header) => (
                      <th key={header} className="px-6 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {reservations.map((reservation, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">{reservation.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{reservation.clientName}</div>
                          <div className="text-xs text-gray-500">{reservation.phoneNo}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-700 font-medium">
                          {reservation.table}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.guests}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {reservation.note ? reservation.note : <span className="text-gray-400">No notes</span>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex items-center gap-1 text-xs leading-5 font-medium rounded-full ${getStatusColor(reservation.tableStatus)}`}>
                          {getStatusIcon(reservation.tableStatus)} {reservation.tableStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                        <button 
                          onClick={() => toggleActionMenu(index)} 
                          className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                        
                        {isActionMenuOpen === index && (
                          <div className="absolute right-6 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100">
                            <div className="py-1">
                              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                <Eye size={16} />
                                <span>View Details</span>
                              </button>
                              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                <Edit size={16} />
                                <span>Edit</span>
                              </button>
                              <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                                <Trash2 size={16} />
                                <span>Cancel</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 bg-white border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">3</span> reservations
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 text-sm">
                  Previous
                </button>
                <button className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-md text-blue-600 hover:bg-blue-100 text-sm font-medium">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 text-sm">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;