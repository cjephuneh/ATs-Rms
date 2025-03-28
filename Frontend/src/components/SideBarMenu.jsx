import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBarMenu = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: 'M4 6h16M4 12h12M4 18h8', name: 'ATS Menu' },
    { path: '/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3', name: 'Dashboard' },
    { path: '/menu', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6', name: 'Menu'},
    { path: '/orders', icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 1.5 1.5 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.055-.75.19-1.122.42-.427.23-.81.497-1.125.83-.315.331-.222.38-.222.82v4.5h8.25a.75.75 0 00.75-.75v-4.5c0-.441.091-.49-.222-.82a2.5 2.5 0 00-1.125-.83 2.871 2.871 0 00-1.123-.42M15 14.25a3 3 0 11-6 0 3 3 0 016 0Z', name: 'Orders' },
    { path: '/tables', icon: 'M3.375 19.5h17.25m-17.25 0a1.875 1.875 0 01-1.875-1.875M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 19.125m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125-.504 1.125-1.125M13.125 10.875h1.5m-1.5 0c0 .621.504 1.125 1.125 1.125v-1.5c-.621 0-1.125.504-1.125 1.125zM12 5.375v3m0 0c0 .621-.504 1.125-1.125 1.125H9m1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v1.5', name: 'Tables' },
    { path: '/delivery', icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125H3.375a1.125 1.125 0 01-1.125-1.125V14.25ZM19.5 4.5v3a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 7.5v-3A1.5 1.5 0 016 3h12a1.5 1.5 0 011.5 1.5Z', name: 'Delivery' },
    { path: '/reservations', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5', name: 'Reservations' },
    { path: '/accounting', icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', name: 'Accounting' },
    { path: '/staff', icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z', name: 'Staff' },
    { path: '/reports', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75m0 12.75h3.75a1.125 1.125 0 0 0 1.125-1.125V14.25m-10.5 3h12a1.125 1.125 0 0 0 1.125-1.125V5.625a1.125 1.125 0 0 0-1.125-1.125H3.375a1.125 1.125 0 0 0-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125Z', name: 'Reports' },
    { path: '/settings', icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.076.461.274.867.562 1.175.29.308.645.516 1.048.62l1.273.337c.541.143.851.702.579 1.21l-.467.87c-.252.47-.244 1.01.028 1.473l.634 1.104c.287.497.792.804 1.362.804h1.063c.559 0 1.029.398 1.119.936l.213 1.28c.09.542-.387.98-.98.98H3.78c-.593 0-1.07-.438-.98-.98l.213-1.28c.09-.542.56-.94 1.11-.94h1.062c.57 0 1.074-.307 1.362-.804l.634-1.104c.272-.463.28-1.002.028-1.473l-.467-.87c-.272-.508.038-1.067.579-1.21l1.273-.337c.403-.107.758-.314 1.048-.62.288-.308.486-.714.562-1.175l.213-1.281Z', name: 'Settings' }
  ];

  useEffect(() => {
    const currentMenuItem = menuItems.find(item => item.path === location.pathname);
    if (currentMenuItem) {
      setActiveMenu(currentMenuItem.name);
    }
  }, [location.pathname, setActiveMenu]);

  const handleMenuItemClick = (item) => {
    setActiveMenu(item.name);
    navigate(item.path);
  };

  return (
    <div className="w-58 h-screen bg-teal-500 text-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`
              flex items-center p-4 cursor-pointer transition-all duration-200
              ${
                activeMenu === item.name
                  ? (item.name === 'ATS Menu' 
                      ? 'bg-white text-teal-700 font-semibold' 
                      : 'bg-teal-700 text-white font-semibold')
                  : 'hover:bg-teal-600'
              }
            `}
            onClick={() => handleMenuItemClick(item)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 mr-3 ${activeMenu === item.name && item.name === 'ATS Menu' ? 'text-teal-700' : 'text-white'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={item.icon}
              />
            </svg>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarMenu;