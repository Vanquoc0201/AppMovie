"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetCinemaSystem } from "@/hooks/cinema/useGetCinemaSystem";
import { useGetCinemaCluster } from "@/hooks/cinema/useGetCinemaCluster";
import { useDeleteCinemaCluster } from "@/hooks/cinema/useDeleteCinemaCluster";
import AddClusterForm from "@/components/cinema/AddCluster";
import CinemaSystemSelector from "@/components/cinema/CinemaSystemSelector";
import CinemaClusterTable from "@/components/cinema/CinemaClusterTable";
import { TCinemaSystem } from "@/types/cinema/system.type";

export default function ListCinema() {
  const [selectedSystemId, setSelectedSystemId] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const router = useRouter();

  const { data: cinemaSystems, isLoading: loadingSystems } = useGetCinemaSystem();
  const { data: cinemaClusters, isLoading: loadingClusters } = useGetCinemaCluster(selectedSystemId ?? 0);
  const { mutate: deleteCinemaCluster } = useDeleteCinemaCluster();

  const handleDelete = (maCumRap: number) => {
    deleteCinemaCluster(maCumRap, {});
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-red-600">Danh sách hệ thống rạp</h1>
        <button
          onClick={() => router.push("/admin/cinema/create")}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Thêm hệ thống rạp
        </button>
      </div>

      {/* Danh sách hệ thống rạp */}
      {loadingSystems ? (
        <p>Đang tải hệ thống rạp...</p>
      ) : (
        <CinemaSystemSelector
          systems={cinemaSystems}
          selectedId={selectedSystemId}
          onSelect={setSelectedSystemId}
        />
      )}

      {/* Cụm rạp */}
      {selectedSystemId && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Cụm rạp thuộc hệ thống:{" "}
            {cinemaSystems?.find((sys:TCinemaSystem) => sys.maHeThongRap === selectedSystemId)?.tenHeThongRap}
          </h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-red-600 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            {showAddForm ? "Hủy thêm" : "Thêm cụm rạp"}
          </button>
        </div>
      )}

      {showAddForm && selectedSystemId && (
        <AddClusterForm selectedSystemId={selectedSystemId} onSuccess={() => setShowAddForm(false)} />
      )}

      {/* Bảng cụm rạp */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Tên cụm rạp</th>
              <th className="p-3 text-left">Địa chỉ</th>
              <th className="p-3 text-left">Mã hệ thống</th>
              <th className="p-3 text-left">Mã cụm rạp</th>
              <th className="p-3 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <CinemaClusterTable
              clusters={cinemaClusters || []}
              loading={loadingClusters}
              onDelete={handleDelete}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
