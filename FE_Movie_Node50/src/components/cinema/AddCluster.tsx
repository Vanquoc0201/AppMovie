"use client";
import { useState } from "react";
import { useAddCinemaCluster } from "@/hooks/cinema/useAddCinemaCluster";
import { toast } from "react-toastify";

interface AddClusterFormProps {
  selectedSystemId: number;
  onSuccess?: () => void;
}

export default function AddClusterForm({ selectedSystemId, onSuccess }: AddClusterFormProps) {
  const [form, setForm] = useState({ maCumRap: "", tenCumRap: "", diaChi: "" });
  const { mutate: addCinemaCluster, isPending } = useAddCinemaCluster();

  const handleSubmit = () => {
    const { maCumRap, tenCumRap, diaChi } = form;

    if (!maCumRap || !tenCumRap || !diaChi) {
      toast.error("Vui lòng nhập đầy đủ tất cả các trường!");
      return;
    }

    addCinemaCluster(
      {
        maCumRap,
        maHeThongRap: String(selectedSystemId),
        tenCumRap,
        diaChi,
      },
      {
        onSuccess: () => {
          setForm({ maCumRap: "", tenCumRap: "", diaChi: "" });
        },
      }
    );
  };

  return (
    <div className="bg-white border p-4 rounded shadow mb-6 max-w-3xl">
      <h3 className="text-lg font-semibold mb-4">Thêm cụm rạp mới</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Mã cụm rạp"
          className="border px-4 py-2 rounded"
          value={form.maCumRap}
          onChange={(e) => setForm({ ...form, maCumRap: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tên cụm rạp"
          className="border px-4 py-2 rounded"
          value={form.tenCumRap}
          onChange={(e) => setForm({ ...form, tenCumRap: e.target.value })}
        />
        <input
          type="text"
          placeholder="Địa chỉ"
          className="border px-4 py-2 rounded"
          value={form.diaChi}
          onChange={(e) => setForm({ ...form, diaChi: e.target.value })}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        disabled={isPending}
      >
        {isPending ? "Đang thêm..." : "Xác nhận thêm"}
      </button>
    </div>
  );
}
