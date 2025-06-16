import React from "react";

const Dashboard = () => {
  return (
    <div className="flex">

      {/* Main content */}
      <main className="flex-1 bg-gray-100 min-h-screen p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-sm text-gray-500">Người dùng</h2>
            <p className="text-xl font-bold text-red-500">1,024</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-sm text-gray-500">Phim</h2>
            <p className="text-xl font-bold text-red-500">215</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-sm text-gray-500">Đặt vé</h2>
            <p className="text-xl font-bold text-red-500">3,456</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-sm text-gray-500">Rạp</h2>
            <p className="text-xl font-bold text-red-500">12</p>
          </div>
        </div>

        {/* Placeholder cho nội dung chi tiết */}
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Thống kê gần đây</h2>
          <p className="text-gray-600 text-sm">Tại đây bạn có thể hiển thị biểu đồ, bảng hoặc chi tiết thống kê...</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;