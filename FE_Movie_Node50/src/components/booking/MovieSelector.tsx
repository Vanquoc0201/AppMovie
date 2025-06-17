import React from "react";

interface Movie {
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
}

interface Props {
  movies: Movie[];
  selectedMovieId: number | "";
  onSelect: (maPhim: number) => void;
  isLoading: boolean;
}

const MovieSelector = ({ movies, selectedMovieId, onSelect, isLoading }: Props) => {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2 text-gray-700">Chọn phim</label>
      {isLoading ? (
        <p className="text-gray-500">Đang tải phim...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.maPhim}
              onClick={() => onSelect(movie.maPhim)}
              className={`cursor-pointer rounded border p-2 shadow-sm hover:shadow-md transition ${
                selectedMovieId === movie.maPhim
                  ? "border-red-500 ring-2 ring-red-300"
                  : "border-gray-300"
              }`}
            >
              <img
                src={movie.hinhAnh}
                alt={movie.tenPhim}
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-sm mt-2 font-medium text-center">{movie.tenPhim}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSelector;
