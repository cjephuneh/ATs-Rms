import React, { useState } from 'react';
import SideBarMenu from './SideBarMenu';

const Reports = () => {
  const [reportType, setReportType] = useState('Monthly');
  const [activeMenu, setActiveMenu] = useState('Reports');
  const [year, setYear] = useState('2025');
  const [month, setMonth] = useState('June');

  const years = ['2025', '2024', '2023'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const handleDownloadReport = () => {
    console.log('Downloading report', { reportType, year, month });
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <SideBarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl -ml-30 text-black font-bold mb-6">Reports</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg text-black font-semibold mb-4">Select the type of report you would like to generate</h2>
            
            <div className="flex space-x-4 mb-4">
              <label className="flex text-black items-center">
                <input 
                  type="radio" 
                  name="reportType" 
                  value="Daily" 
                  checked={reportType === 'Daily'}
                  onChange={() => setReportType('Daily')}
                  className="mr-2 text-black"
                />
                Daily
              </label>
              <label className="flex text-black items-center">
                <input 
                  type="radio" 
                  name="reportType" 
                  value="Monthly" 
                  checked={reportType === 'Monthly'}
                  onChange={() => setReportType('Monthly')}
                  className="mr-2 text-black"
                />
                Monthly
              </label>
              <label className="flex text-black items-center">
                <input 
                  type="radio" 
                  name="reportType" 
                  value="Yearly" 
                  checked={reportType === 'Yearly'}
                  onChange={() => setReportType('Yearly')}
                  className="mr-2 text-black"
                />
                Yearly
              </label>
            </div>
            
            <div className="flex space-x-4 mb-6">
              <select 
                value={year} 
                onChange={(e) => setYear(e.target.value)}
                className="border rounded p-2 w-[180px]"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              
              <select 
                value={month} 
                onChange={(e) => setMonth(e.target.value)}
                className="border rounded p-2 w-[180px]"
              >
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              
              <button 
                onClick={handleDownloadReport} 
                className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Generate Report
              </button>
            </div>
            
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-600 text-black flex items-center justify-center">
                  xlsx
                </div>
                <div>
                  <p className="font-semibold text-black">Monthly Delivery Report</p>
                  <p className="text-sm text-gray-500">June 2025 - July 2025</p>
                </div>
              </div>
              <button 
                onClick={handleDownloadReport} 
                className="border px-4 py-2 rounded hover:bg-gray-100"
              >
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;