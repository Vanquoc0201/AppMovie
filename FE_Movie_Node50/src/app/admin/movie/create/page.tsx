"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAddMovie } from "@/hooks/movie/useAddMovies";


const CreateMovie = () => {
  const router = useRouter();
  const { mutate: addMovie, isPending } = useAddMovie();

  const [formDataState, setFormDataState] = useState({
    maPhim: "",
    tenPhim: "",
    trailerPhim: "",
    moTa: "",
    ngayKhoiChieu: "",
    danhGia: "" as unknown as number,
    trangThai: "DangChieu" as "DangChieu" | "SapChieu" | "NgungChieu",
    dienVien: "",
    quocGia: "",
    theLoai: "",
    thoiLuong: "" as unknown as number,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Vui lòng chọn hình ảnh.");
      return;
    }

    const formData = new FormData();
    formData.append("maPhim", formDataState.maPhim);
    formData.append("tenPhim", formDataState.tenPhim);
    formData.append("trailerPhim", formDataState.trailerPhim);
    formData.append("moTa", formDataState.moTa);
    formData.append("ngayKhoiChieu", formDataState.ngayKhoiChieu);
    formData.append("danhGia", String(formDataState.danhGia));
    formData.append("trangThai", formDataState.trangThai);
    formData.append("dienVien", formDataState.dienVien);
    formData.append("quocGia", formDataState.quocGia);
    formData.append("theLoai", formDataState.theLoai);
    formData.append("thoiLuong", String(formDataState.thoiLuong));
    formData.append("hinhAnh", imageFile);

    addMovie(formData, {
      onSuccess: () => {
        router.push("/admin/movie");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold mb-4">Thêm phim mới</h2>

      <label className="block text-sm font-medium text-gray-700">Mã phim</label>
      <input
        name="maPhim"
        type="text"
        value={formDataState.maPhim}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Tên phim</label>
      <input
        name="tenPhim"
        type="text"
        value={formDataState.tenPhim}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Trailer phim</label>
      <input
        name="trailerPhim"
        type="text"
        value={formDataState.trailerPhim}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Mô tả phim</label>
      <textarea
        name="moTa"
        value={formDataState.moTa}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Ngày khởi chiếu của phim</label>
      <input
        name="ngayKhoiChieu"
        type="date"
        value={formDataState.ngayKhoiChieu}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Đánh giá phim theo thang điểm từ 1 - 10</label>
      <input
        name="danhGia"
        type="number"
        min={1}
        max={10}
        value={formDataState.danhGia || ""}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Trạng thái</label>
      <select
        name="trangThai"
        value={formDataState.trangThai}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      >
        <option value="DangChieu">Đang chiếu</option>
        <option value="SapChieu">Sắp chiếu</option>
        <option value="NgungChieu">Ngừng chiếu</option>
      </select>

      <label className="block text-sm font-medium text-gray-700">Diễn viên tham gia</label>
      <input
        name="dienVien"
        type="text"
        value={formDataState.dienVien}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Quốc gia</label>
      <input
        name="quocGia"
        type="text"
        value={formDataState.quocGia}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Thể loại phim</label>
      <input
        name="theLoai"
        type="text"
        value={formDataState.theLoai}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Thời lượng (phút)</label>
      <input
        name="thoiLuong"
        type="number"
        value={formDataState.thoiLuong || ""}
        onChange={handleChange}
        required
        className="w-full border rounded p-2"
      />

      <label className="block text-sm font-medium text-gray-700">Hình ảnh phim</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {isPending ? "Đang thêm..." : "Thêm phim"}
      </button>
    </form>
  );
};

export default CreateMovie;
