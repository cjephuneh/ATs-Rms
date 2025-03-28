import React, { useState } from 'react';
import { Edit, Trash2, PlusCircle, LogOut} from 'lucide-react';
import SideBarMenu from './SideBarMenu';
import { 
  EditProfileForm, 
  AddTeamMemberForm, 
  ChangePasswordForm 
} from './UserManage';
import { Navigate, useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate()
  const [activeMenu, setActiveMenu] = useState("Settings")
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Andre Garvali',
    phone: '+1 718 222 2222',
    email: 'andrelatgarvali@gmail.com'
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Andre Garvali', role: 'Admin' },
    { id: 2, name: 'James Knowles', role: 'Member' },
    { id: 3, name: 'Sally Whitman', role: 'Member' }
  ]);

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const handleRemoveMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  return (
    <div className="flex  w-full h-screen">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        <h1 className="text-3xl text-black font-bold mb-8">Settings</h1>
        
        <div className="space-y-6">
          {/* Personal Information Section */}
          <div className="bg-white text-black shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <button 
                onClick={() => setShowEditProfileModal(true)}
                className="text-blue-600 hover:bg-blue-50 p-2 rounded flex items-center"
              >
                <Edit className="mr-2 h-5 w-5" /> Edit
              </button>
              <button 
                  onClick={handleLogout}
                  className="text-red-600 hover:bg-red-50 p-2 rounded flex items-center"
                >
                  <LogOut className="mr-2 h-5 w-5" /> Logout
                </button>
            </div>
            <div className="flex items-center space-x-30 mb-4">
              <img 
              className='rounded-full h-50 w-50'
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2gMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAYHBf/EADgQAAIBAwIEAwUGBQUBAAAAAAABAgMEEQUSBiExQRNRYQcUInGBMkJSkaGxIzPR4fBDYnKCwST/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIEA//EACARAQEAAgMAAgMBAAAAAAAAAAABAhEDEiFBURMxQgT/2gAMAwEAAhEDEQA/APVFEtRLUS9oEKI9pe0eAI2htLwPAGPaG0yYDAEYDBeBNARtDBQATgMDfLqHcASDAxoCcBgvAYAjaG0yYDAGPaG0yYDAGLaJxMuA2ga7iTKJsuJDiBqSgY9htyiY9oG4ojSLSHgCMDwVgeAMeAwXgGgIwBQn1AkTKFLkBH7HwdY4loadVVGjQndVdu5qm0ox5pc5fNm1xJfx0/SK9aTeWtkcPHNnjeoa3cK+nZafTisVHjt3z+vMrldLY47ekT4wuPeNtOwhSpqWN9Wrub/JcgpcT38FOnVoWtarGX3W4JxecLvzzg83q3eqVqlRSgoRkm0m+vbka6vLylGDqKTnOSlt83jC5enP8ym66dY9W0vjS0ublWt9RdpWctsZb90H9cI6lSx1/M8Fuq6uVBXEVtUMLlnD+8zr+DuJqmm1Va6hWlKwisO4qyxGi+2f8+haVTLF6cikY4SUoqUecXzT80ZUXUAYKQAIMFABOAwXgMAY8EuJmwTgDBKJGw2JInAGbA0isBgCWhFYDAEiKEAmIoQEsiRkIn0A8x9qerqN3baZ4iUVHxJxzhuTa7/LPI8+rb1c+8UYtzUFGqm/t9tyfmdXxxD37j6haKLxuT3PthJNo7Slo2nSUIVLWnJxio84nDPLVaeLDceSu5ryjCrXn4coPEZPllrGGvnhfqTQr3txc5o2niySSXXmsdT2mjw7pCWY2VBf9T6VK0tqMYxpU4RUenw9B2X6aeNWnCGpaq1Xm526gvhTz2Rk1DSL7TEld+BVoJb4SqSw9/Z/Q9jqTiliOEc1xna07rR7jfhShHdBvzKd/Vuk02PZzfVLvh2lSrVPEnbvw1N90un07HXRPOPZBWjKyuafhQpzhtUsLG7rz9T0ePQ0y7jFZqmMEMlAHgB4AAGkPAE4DBeBYAxtE4MzROALwGCgAnAsFCwBAmUJgSIpiAREujLJYHlnFlvO04vjcqW6W5SXLpGXb8zq7efiS+JPJ8riyjJcXWFTduhKVPcvw8+X5/1NbVeJFY3NaMaMY06T2yqVZbU36Gfkm618OWpqu0tksczPsi/I86072g2lXa6k6ShKe2NSM+Tfpk6vUNU9002V7Jrw4rc22V3p01v2PpVKcfqc/wAS0a1xptzSoR3TcenocjX431KVejKNKUaFWbjTlGnJ5afPsdFwzqd5qLlG4nSrU5pqM4cmn5MjXu0714n2Y26hVvFBpqlGNNvu23k9CiuRw3s8p+FKae3xJt+J54Swv2z9TuzThdxizmqEMENFlDGkA0AYGkNDAQ8DDAEtCwXgMAIGMGBIDYgJfQllslgSxMpiYEiZQmByPFNinq9hdOUl/Gglz+FLPP69P1MENPt6l1Oap01WUnic4qZ9/iW1jdaTWbT30F4tPD+8uZzumX0LiSrJ4b6ryM/JNVr4cu0fQqWW2i3cyhVj0UfDSRlpUYy0ijDw0lTaWMdl0MOp3it9PqXEqc6sKeG4QWZNfI0LHjDSa+kyq0anOP8ApvlJPywyjtX1JWVSrzpVIQi/Onlg6Ct3Do2pLnjHMx6RqXvlmrh0XQ3t7YTa5rzRj1C88LM3y2rPMVN/Tb4Xo091xOEYrw61VbkuuZy/bODoj5PC+x6PSqxil4spzlju3Jn1kacJqMHJd5GhgNFlAupQJDQDQxIoAAAAAAAAGAMCWIbEAmJjEwJEMQCJZTJYGOrFSg4yWVJNNHj97cVOH9Una3M1GMKjhnonHPwy/I9gn0PN/a5plOvaW11FYqr4M46rrzKZyVfjysvj4+mWutXNG4r2lahc03KS21KsotrOOqyO34UqTl7xUt7OFaPOL98l1X+3bzOe4X12vpl57vWqNU2k8Ps32/P9j7teFWte071Xb2Zw6WFy9M+Zxymm3jzlnsbtbSdTpabUq1by1taUPijCnTk3682//DUWuPUK1vY205VZxjGnnvObRpcZ63Ut7GNpSqSkmsKX4o+v+eht+zbT9mpULyp/Mm4uMccorHUSfanJnu+PXNJtvcdNt7XOXSpqLfm+/wCrZuohFo0MXyoYil0JDRSJRSACiSgAAAAAAABMBAAmMTAQmPJLYCENiARLKJYESOb43t4XmlOgpJzjLLinzR0cpZyovDwcdWjG1q3Vv9p+JlZ6uL5nPktkdeHHeTx7UtOrUrn3eUWpdac11Xpn6jnV1uCdPw4zbfLPz/sj0TUbGFdeLGKco9DQp0qLnHxKbbj07YOPetP4o5SnpN7LZX1Gpvmn/DpeXzPRuErN2qp1J5dTr8zStLNVqsW4bYrn0OhgvDppw6oi3aekjq7a6o3W7wpNyj9qLXQ2EfM0Oh4do60k91Tn9D6SfI1Y22brFnJLZFopdCE8lrkiVTQxDApDJyMBgAAAAAEgTkeQBiDJLAMiAABkt46kzniSj3YgG2SykiWSIX2mfI1HSlcVFWp/zIrH/JH1xNEXGZftbHK43xw86VS1vHSqRajLpk1K9tGNXMY9zv6tOnUjtrU4zXquhqVNLsqjz4ck/RnC8N+GrH/Rj8xytGLp0M7ftPB9vTtOncJKeVSX2pefoj6lHTbSk4vw3JrpvfJG6nywunoTjxfavJzz+VxSjHbFYSWMDXQlFI7soaBOSYxNgWqi78i08mBvEW32HbTzmL6ogZxiAChkjyAwFkMgYshkjIZArIZJyLIFEVaipU3J9h58z5ur1ttONNd+ZMBQrOc9zN7dz5nyaMtsbefZvEvkz6DbTivQDPnImRF9WPIDJY8iYAAshkBotEJ5LQFIZIwGS2NsxTlh/QC5PMY/M1qdTZXg/wAS5l1Z7aaefuv+xq1H/FS/DFL9MgfYTwUmYKFTxKMJ+a5mTJAvI8mPIZAvIZIyGQMWQAAAMgABk+BrU37w/R4/QAJiFQf/AMHycv6n0W23HPkAFkrg/hb9WUmAEBgAAITAAHEtAADGAEBNmGrJqP1AAMFTnXjF9MLkYFJupOT65l+zACYN7S5N27XlI3MgBFBkMgBATYsgAH//2Q=="
               alt='profile'></img>
              <div className="space-y-2">
                <p><strong>Name:</strong> {personalInfo.name}</p>
                <p><strong>Phone:</strong> {personalInfo.phone}</p>
                <p><strong>Email:</strong> {personalInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Account Security Section */}
          <div className="bg-white text-black shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Account Security</h2>
              <button 
                onClick={() => setShowChangePasswordModal(true)}
                className="text-blue-600 hover:bg-blue-50 p-2 rounded"
              >
                Change password
              </button>
            </div>
          </div>

          {/* Team Members Section */}
          <div className="bg-white text-black shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Team Members</h2>
              <button 
                onClick={() => setShowAddMemberModal(true)}
                className="text-blue-600 hover:bg-blue-50 p-2 rounded flex items-center"
              >
                <PlusCircle className="mr-2 h-5 w-5" /> Add team member
              </button>
            </div>
            <div className="divide-y">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="flex justify-between items-center py-3"
                >
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                  <button 
                    onClick={() => handleRemoveMember(member.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modals */}
        {showEditProfileModal && (
          <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6">
              <EditProfileForm />
              <button 
                onClick={() => setShowEditProfileModal(false)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showAddMemberModal && (
          <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6">
              <AddTeamMemberForm />
              <button 
                onClick={() => setShowAddMemberModal(false)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showChangePasswordModal && (
          <div className="fixed inset-0 text-black bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6">
              <ChangePasswordForm />
              <button 
                onClick={() => setShowChangePasswordModal(false)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;