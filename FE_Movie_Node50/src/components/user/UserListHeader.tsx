import Link from "next/link";

interface Props {
  keyword: string;
}

const UserListHeader = ({ keyword }: Props) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold text-red-600">
      {keyword ? `Kết quả tìm "${keyword}"` : "Danh sách người dùng"}
    </h2>
    <Link href="/admin/user/create">
      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-black transition">
        Thêm người dùng
      </button>
    </Link>
  </div>
);

export default UserListHeader;
