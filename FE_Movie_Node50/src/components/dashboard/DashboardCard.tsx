const stats = [
  { title: "Người dùng", value: "1,024" },
  { title: "Phim", value: "215" },
  { title: "Đặt vé", value: "3,456" },
  { title: "Rạp", value: "12" },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((item, index) => (
        <div key={index} className="bg-white p-4 shadow rounded">
          <h2 className="text-sm text-gray-500">{item.title}</h2>
          <p className="text-xl font-bold text-red-500">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
