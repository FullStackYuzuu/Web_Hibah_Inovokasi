import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminSalesChart = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopupOnOutsideClick = (e) => {
    // Check if the click happened outside the modal content
    if (e.target.id === 'chart-popup') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Button to open chart in mobile, centered */}
      <div className="flex justify-center items-center min-h-[200px] sm:hidden">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
          onClick={togglePopup}
        >
          Lihat Grafik
        </button>
      </div>

      {/* Chart as popup for mobile */}
      {isOpen && (
        <div
          id="chart-popup"
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={closePopupOnOutsideClick}
        >
          <div className="relative bg-white rounded-lg shadow-lg w-full sm:w-auto h-[300px] sm:h-auto p-5 sm:p-0">
            <button
              className="absolute top-2 right-2 text-black bg-gray-300 rounded-full p-2"
              onClick={togglePopup}
            >
              &times;
            </button>
            <div className="w-[90vw] h-[60vw] sm:w-[600px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" stroke="#FFA500" />
                  <YAxis stroke="#FFA500" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#FFA500" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Chart visible in desktop */}
      <div className="hidden sm:block w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#FFA500" />
            <YAxis stroke="#FFA500" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#FFA500" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default AdminSalesChart;
