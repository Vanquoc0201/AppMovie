"use client";

import React from "react";
import MovieTable from "@/components/movie/MovieTable";
import Link from "next/link";
import { useMovies } from "@/hooks/movie/useMovies";
const ListMovie = () => {
  const { data: movies, isLoading, isError, error } = useMovies();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-red-600">Danh sách phim</h2>
        <Link href="/admin/movie/create">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-black transition">
            Thêm phim
          </button>
        </Link>
      </div>

      {isLoading && (
        <div className="text-center text-gray-500">Đang tải danh sách phim...</div>
      )}

      {isError && (
        <div className="text-center text-red-500">
          {(error as Error)?.message || "Lỗi khi tải phim"}
        </div>
      )}

      {movies && <MovieTable movies={movies} />}
    </div>
  );
};

export default ListMovie;
