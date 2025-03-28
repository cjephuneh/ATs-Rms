import React from 'react';

const NotificationsModal = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-96 max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg text-black font-bold">Notifications</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-4 space-y-4">
          {notifications.map((notification, index) => (
            <div 
              key={index} 
              className="flex items-start text-black bg-yellow-50 p-3 rounded-lg"
            >
              <div className="mr-3 text-2xl">{notification.icon}</div>
              <div>
                <p className="font-semibold text-sm">{notification.type}</p>
                <p className="text-xs text-gray-600">{notification.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;