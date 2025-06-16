"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAddCinemaSystem } from "@/hooks/cinema/useAddCinemaSystem";
const CreateCinemaSystem = () => {
  const router = useRouter();
  const { mutate: addCinemaSystem, isPending } = useAddCinemaSystem();

  const [formState, setFormState] = useState({
    maHeThongRap: "",
    tenHeThongRap: "",
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setLogoFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!logoFile) {
      alert("Vui lòng chọn logo hệ thống rạp.");
      return;
    }

    const formData = new FormData();
    formData.append("maHeThongRap", formState.maHeThongRap);
    formData.append("tenHeThongRap", formState.tenHeThongRap);
    formData.append("logo", logoFile);

    addCinemaSystem(formData, {
      onSuccess: () => {
        router.push("/admin/cinema");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-xl mx-auto mt-8"
    >
      <h2 className="text-2xl font-semibold text-red-600 mb-4">Thêm hệ thống rạp</h2>

      <label className="block text-sm font-medium text-gray-700">Mã hệ thống rạp</label>
      <input
        name="maHeThongRap"
        type="text"
        value={formState.maHeThongRap}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Tên hệ thống rạp</label>
      <input
        name="tenHeThongRap"
        type="text"
        value={formState.tenHeThongRap}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Logo hệ thống rạp</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        required
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-red-600 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        {isPending ? "Đang thêm..." : "Thêm hệ thống rạp"}
      </button>
    </form>
  );
};

export default CreateCinemaSystem;
