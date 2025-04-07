import React, { useState, useEffect } from 'react'; 
import SideBarMenu from './SideBarMenu';  
import { useNavigate } from 'react-router-dom';

const Accounting = () => {
   const [activeMenu, setActiveMenu] = useState('Accounting');
   const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
   const notifications = []; // Assuming empty notifications array for now
   const navigate = useNavigate()

   const [userName, setUserName] = useState("");

   useEffect(() => {
    // Retrieve user name from localStorage
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    } else {
      navigate("/"); // Redirect if no user is logged in
    }
  }, [navigate]);

   return (
     <div className="flex w-full h-full">
       <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
       
       <div className="flex-1 p-4 overflow-hidden">
         <div className="flex justify-between items-center mb-4">
           <h1 className="text-2xl font-bold text-gray-500">Welcome {userName}</h1>
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
             <div className="mr-4 text-sm text-gray-500">{userName}</div>
             <div className="w-10 h-10 bg-gray-300 rounded-full">
               <img
                 className="rounded-full h-10"
                 src="data:image/jpeg;base64,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"
                 alt="Andre"
               />
             </div>
           </div>
         </div>

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
     </div>
   );
};

export default Accounting;