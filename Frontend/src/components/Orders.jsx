import React, { useState } from 'react';
import { LayoutGrid } from 'lucide-react';
import Header from './Header';
import SideBarMenu from './SideBarMenu';

const OrderDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    clientName: '',
    delivery: '',
    orderTotal: '',
    orderItems: ''
  });
  const orders = [
    { time: '8:00am', orderNumber: 'NPN124422', clientName: 'Anna Nishka', delivery: 'Eat in', orderTotal: 540, orderItems: 4, deliveryStatus: 'Pending' },
    { time: '6:32am', orderNumber: 'NPN124423', clientName: 'Nancy Wangari', delivery: 'Pick up', orderTotal: 540, orderItems: 4, deliveryStatus: 'Processing' },
    { time: '6:32am', orderNumber: 'NPN124423', clientName: 'Nancy Wangari', delivery: 'Pick up', orderTotal: 540, orderItems: 4, deliveryStatus: 'Completed' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-200 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Order:', newOrder);
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      {/* Main content area including Header */}
      <div className="flex flex-col flex-1 overflow-x-hidden">
        <Header />
        
        <div className="flex mb-120 flex-col flex-1 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <LayoutGrid className="text-gray-600" />
            <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Live orders</h2>
              <button 
                className="px-4 py-2 bg-blue-500 text-blue rounded-lg"
                onClick={() => setIsModalOpen(true)}
              >
                New Order
              </button>
            </div>

            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  {['Time', 'Order number', 'Client name', 'Delivery', 'Order total', 'Order items', 'Delivery status'].map((heading, index) => (
                    <th key={index} className="p-3 text-left text-xs font-medium text-gray-500">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-sm text-gray-600">{order.time}</td>
                    <td className="p-3 text-sm text-gray-600">{order.orderNumber}</td>
                    <td className="p-3 text-sm text-gray-600">{order.clientName}</td>
                    <td className="p-3 text-sm text-gray-600">{order.delivery}</td>
                    <td className="p-3 text-sm text-gray-600">${order.orderTotal}</td>
                    <td className="p-3 text-sm text-gray-600">{order.orderItems} items</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.deliveryStatus)}`}>
                        {order.deliveryStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center text-black justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">New Order</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="clientName" placeholder="Client Name" className="w-full p-2 mb-2 border rounded" onChange={handleInputChange} required />
              <select name="delivery" className="w-full p-2 mb-2 border rounded" onChange={handleInputChange} required>
                <option value="">Select Delivery Type</option>
                <option value="Eat in">Eat in</option>
                <option value="Pick up">Pick up</option>
                <option value="Delivery">Delivery</option>
              </select>
              <input type="number" name="orderTotal" placeholder="Order Total" className="w-full p-2 mb-2 border rounded" onChange={handleInputChange} required />
              <input type="number" name="orderItems" placeholder="Order Items" className="w-full p-2 mb-4 border rounded" onChange={handleInputChange} required />
              <div className="flex justify-between">
                <button type="button" className="px-4 py-2 bg-gray-500 text-red rounded" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-green rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDashboard;