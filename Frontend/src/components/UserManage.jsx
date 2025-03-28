import React, { useState } from 'react';

const EditProfileForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Edit your information</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text"
            placeholder="First Name" 
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input 
            type="text"
            placeholder="Last Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input 
          type="text"
          placeholder="Email Address/Student ID"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Phone number"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button 
          className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition-colors"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
};

const AddTeamMemberForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userTitle, setUserTitle] = useState('');
  const [selectedRoles, setSelectedRoles] = useState([]);

  const roles = [
    'Take Orders',
    'View Menu',
    'View Tables',
    'Assign Tables'
  ];

  const toggleRole = (role) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role) 
        : [...prev, role]
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Add a team member</h2>
      <div className="space-y-4">
        <input 
          type="text"
          placeholder="Enter users name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="email"
          placeholder="Enter email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userTitle}
          onChange={(e) => setUserTitle(e.target.value)}
        >
          <option value="">Select User Title</option>
          <option value="Waiter">Waiter</option>
          <option value="Manager">Manager</option>
          <option value="Lorem ipsum">Lorem ipsum</option>
        </select>
        <div>
          <h4 className="mb-2 text-sm font-medium">Roles</h4>
          <div className="space-y-2">
            {roles.map((role) => (
              <div key={role} className="flex items-center space-x-2">
                <input 
                  type="checkbox"
                  id={role}
                  checked={selectedRoles.includes(role)}
                  onChange={() => toggleRole(role)}
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                />
                <label 
                  htmlFor={role} 
                  className="text-sm text-gray-700"
                >
                  {role}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button 
          className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition-colors"
          type="submit"
        >
          Send Invitation
        </button>
      </div>
    </div>
  );
};

const MemberProfileCard = () => {
  const [userTitle, setUserTitle] = useState('Waiter');
  const [selectedRoles, setSelectedRoles] = useState([]);

  const roles = [
    'Take Orders',
    'View Menu',
    'View Tables',
    'Assign Tables'
  ];

  const toggleRole = (role) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role) 
        : [...prev, role]
    );
  };

  return (
    <div className="bg-white text-black shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Member profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User's email
          </label>
          <input 
            type="email"
            value="member@example.com" 
            readOnly 
            className="w-full px-3 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User title
          </label>
          <select 
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userTitle}
            onChange={(e) => setUserTitle(e.target.value)}
          >
            <option value="Waiter">Waiter</option>
            <option value="Manager">Manager</option>
            <option value="Lorem ipsum">Lorem ipsum</option>
          </select>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-medium">User roles</h4>
          <div className="space-y-2">
            {roles.map((role) => (
              <div key={role} className="flex items-center space-x-2">
                <input 
                  type="checkbox"
                  id={role}
                  checked={selectedRoles.includes(role)}
                  onChange={() => toggleRole(role)}
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                />
                <label 
                  htmlFor={role} 
                  className="text-sm text-gray-700"
                >
                  {role}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button 
          className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition-colors"
          type="submit"
        >
          Update information
        </button>
      </div>
    </div>
  );
};

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Change password</h2>
      <div className="space-y-4">
        <input 
          type="password"
          placeholder="Current password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Enter New password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Confirm new password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button 
          className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition-colors"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { 
  EditProfileForm, 
  AddTeamMemberForm, 
  MemberProfileCard, 
  ChangePasswordForm 
};