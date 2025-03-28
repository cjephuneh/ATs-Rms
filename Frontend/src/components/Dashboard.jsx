import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBarMenu from './SideBarMenu';
import NotificationsModal from './Notifications';


const Dashboard = () => {
  const [stats] = useState({
    revenue: 96321,
    orders: 61,
    customers: 7321,
    pendingOrders: 321
  });
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  

  const [orderList, setOrderList] = useState([
    { item: 'Sweet cheesy pizza for kids', status: 'Pending', quantity: 12, image: 'https://via.placeholder.com/50' },
    { item: 'Sweet cheesy pizza for kids', status: 'Completed', quantity: 10, image: 'https://via.placeholder.com/50' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    item: '',
    status: 'Pending',
    quantity: '',
    image: 'https://via.placeholder.com/50'
  });

  const [orderChart] = useState([
    { month: 'Jan', orders: 45 },
    { month: 'Feb', orders: 52 },
    { month: 'Mar', orders: 61 },
    { month: 'Apr', orders: 58 },
    { month: 'May', orders: 65 },
    { month: 'Jun', orders: 70 },
    { month: 'Jul', orders: 75 },
    { month: 'Aug', orders: 68 },
    { month: 'Sep', orders: 62 },
    { month: 'Oct', orders: 55 },
    { month: 'Nov', orders: 50 },
    { month: 'Dec', orders: 48 }
  ]);

  const [todayReservations] = useState([
    { time: '11:30am', table: '1', status: 'Confirmed' },
    { time: '12:30pm', table: '7', status: 'Seated' }
  ]);

  const [outOfStock] = useState([
    { item: 'Sweet cheesy pizza for kids', quantity: 0 }
  ]);

  const [leastOrderedItems] = useState([
    { item: 'Hot & Spicy Chicken', timesOrdered: 21 },
    { item: 'Sweet cheesy pizza for kids', timesOrdered: 24 }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderList([...orderList, { ...newOrder, quantity: parseInt(newOrder.quantity, 10) }]);
    setIsModalOpen(false);
    setNewOrder({
      item: '',
      status: 'Pending',
      quantity: '',
      image: 'https://via.placeholder.com/50'
    });
  };

  const notifications = [
    { 
      type: 'Order', 
      message: 'You have 1 new order from an online customer',
      icon: '🍽️'
    },
    { 
      type: 'Reservation', 
      message: 'Andre has reserved table 2 for 8:00 am 12/2/2025. (2 guests)',
      icon: '📋'
    },
    { 
      type: 'Order', 
      message: 'You have 1 new order from an online customer',
      icon: '🍽️'
    }
  ];


  return (
    <div className="flex w-full h-full overflow-x-hidden">
      {/* Sidebar */}
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-500">Welcome Andre Carvalli</h1>
          <div className="flex items-center">
          <button 
              onClick={() => setIsNotificationModalOpen(true)}
              className="mr-4 relative bg-white rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.58V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.579c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                  {notifications.length}
                </span>
              )}
            </button>
            <div className="mr-4 text-sm text-gray-500">Andre Carvalli</div>
            <div className="w-10 h-10 bg-gray-300 rounded-full">
              <img
                className="rounded-full h-10"
                src="data:image/jpeg;base64,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"
                alt="Andre"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          {[
            { label: 'Total Revenue', value: `$${stats.revenue.toLocaleString()}`, color: 'blue' },
            { label: 'Total Orders', value: stats.orders, color: 'green' },
            { label: 'Total Customers', value: stats.customers, color: 'purple' },
            { label: 'Pending Orders', value: stats.pendingOrders, color: 'yellow' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
              <div className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg shadow p-4 col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-black">Order Management (Live)</h2>
              <button 
                className="text-sm text-blue-600" 
                onClick={() => setIsModalOpen(true)}
              >
                New Order
              </button>
            </div>
            
            <div className="space-y-2">
              {orderList.map((order, index) => (
                <div key={index} className="flex items-center pb-2">
                  <p className="text-black">{order.item}</p>
                  <div className="flex-1">
                    <span className={`
                      inline-block px-2 py-1 rounded-full text-xs
                      ${order.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                      }
                    `}>
                      {order.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">Qty: {order.quantity}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold text-black mb-4">Popular Dishes Today</h2>
            <div className="space-y-2 text-black">
              {[
                { dish: 'Sweet cheesy pizza for kids', image: 'https://via.placeholder.com/50' },
                { dish: 'Sweet cheesy pizza for kids', image: 'https://via.placeholder.com/50' },
                { dish: 'Sweet cheesy pizza for kids', image: 'https://via.placeholder.com/50' }
              ].map((dish, index) => (
                <div key={index} className="flex justify-around items-center pb-2">
                  <img 
                    src={dish.image} 
                    alt={dish.dish} 
                    className="w-12 h-12 rounded mr-4"
                  />
                  <div className="font-semibold">{dish.dish}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold text-black mb-4">Order Chart</h2>
            <div className="h-40 flex items-end">
              {orderChart.map((data, index) => (
                <div key={index} className="flex-1 mx-0.5 flex flex-col items-center">
                  <div 
                    className="bg-teal-500 w-full" 
                    style={{ height: `${data.orders * 2}px` }}
                  ></div>
                  <div className="text-xs text-gray-600 mt-1">{data.month}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold text-black mb-4">Today's Reservations</h2>
            <div className="space-y-2">
              {todayReservations.map((reservation, index) => (
                <div key={index} className="flex justify-between items-center pb-2">
                  <div>
                    <div className="font-semibold">{reservation.time}</div>
                    <div className="text-sm text-gray-500">Table {reservation.table}</div>
                  </div>
                  <span className={`
                    inline-block px-2 py-1 rounded-full text-xs
                    ${reservation.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                    }
                  `}>
                    {reservation.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-black">Out of Stock</h2>
              <span className="text-red-600 text-sm">Update Inventory</span>
            </div>
            <div className="space-y-2">
              {outOfStock.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-2">
                  <div className="font-semibold">{item.item}</div>
                  <span className="text-red-600 font-bold">{item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-bold text-black mb-4">Least Ordered Items</h2>
              <div className="space-y-2">
                {leastOrderedItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-2">
                    <div className="font-semibold">{item.item}</div>
                    <span className="text-gray-600">{item.timesOrdered} times</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex text-black items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-bold mb-4">Create New Order</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm mb-1">Item Name</label>
                <input 
                  type="text" 
                  value={newOrder.item} 
                  onChange={(e) => setNewOrder({ ...newOrder, item: e.target.value })}
                  className="w-full border border-gray-300 rounded px-2 py-1" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Status</label>
                <select 
                  value={newOrder.status} 
                  onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
                  className="w-full border border-gray-300 rounded px-2 py-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Quantity</label>
                <input 
                  type="number" 
                  value={newOrder.quantity} 
                  onChange={(e) => setNewOrder({ ...newOrder, quantity: e.target.value })}
                  className="w-full border border-gray-300 rounded px-2 py-1" 
                  required 
                />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="mr-2 text-sm text-gray-600"
                >
                  Cancel
                </button>
                <button type="submit" className="text-sm text-blue-600">
                  Add Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <NotificationsModal 
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        notifications={notifications}
      />
    </div>
  );
};

export default Dashboard;
