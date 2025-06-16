import { TCluster } from "@/types/cinema/cluster.type";

interface Props {
  clusters: TCluster[];
  loading: boolean;
  onDelete: (maCumRap: number) => void;
}

export default function CinemaClusterTable({ clusters, loading, onDelete }: Props) {
  if (loading) {
    return (
      <tr>
        <td colSpan={6} className="text-center p-4">
          Đang tải cụm rạp...
        </td>
      </tr>
    );
  }

  if (!clusters.length) {
    return (
      <tr>
        <td colSpan={6} className="text-center p-4 text-gray-500">
          Chưa có cụm rạp nào cho hệ thống này.
        </td>
      </tr>
    );
  }

  return (
    <>
      {clusters.map((cluster, index) => (
        <tr key={cluster.maCumRap} className="border-b hover:bg-gray-50">
          <td className="p-3">{index + 1}</td>
          <td className="p-3 font-medium text-red-600">{cluster.tenCumRap}</td>
          <td className="p-3">{cluster.diaChi}</td>
          <td className="p-3">{cluster.maHeThongRap}</td>
          <td className="p-3">{cluster.maCumRap}</td>
          <td className="p-3">
            <button
              onClick={() => onDelete(Number(cluster.maCumRap))}
              className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm"
            >
              Xóa
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
