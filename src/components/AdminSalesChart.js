// components/AdminSalesChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminSalesChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" stroke="#FFA500" />
        <YAxis stroke="#FFA500" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#FFA500" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AdminSalesChart;
