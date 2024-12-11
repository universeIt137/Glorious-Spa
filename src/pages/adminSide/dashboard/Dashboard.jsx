import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-indigo-600">
                    <p className="text-sm font-medium text-gray-500">Total Users</p>
                    <h2 className="text-3xl font-bold text-gray-800">89,935</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-indigo-600">
                    <p className="text-sm font-medium text-gray-500">Total Products</p>
                    <h2 className="text-3xl font-bold text-gray-800">23,283.5</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-indigo-600">
                    <p className="text-sm font-medium text-gray-500">Total Orders</p>
                    <h2 className="text-3xl font-bold text-gray-800">46,827</h2>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-indigo-600">
                    <p className="text-sm font-medium text-gray-500">Refunded</p>
                    <h2 className="text-3xl font-bold text-gray-800">124,854</h2>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Orders Analytics</h2>
                    <div className="h-40 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Earnings</h2>
                    <div className="h-40 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Reports</h2>
                    <div className="h-40 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Backlink</h2>
                    <div className="h-40 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;