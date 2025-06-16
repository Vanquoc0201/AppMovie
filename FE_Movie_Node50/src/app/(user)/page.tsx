"use client";
import Article from "@/components/movie/Article";
import Banner from "@/components/movie/Banner";
import { useMovies } from "@/hooks/movie/useMovies";
import { TArticle } from "@/types/article/article.type";
export default function Home() {
  const { data: movies, isLoading, isError, error } = useMovies();
  if (isLoading) return <div>Đang tải phim...</div>;
  if (isError) return <div>Lỗi: {(error as Error).message}</div>;
  return (
    <>
      <Banner />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Danh sách phim</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.map((movie: TArticle, index: number) => (
            <Article key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );

}