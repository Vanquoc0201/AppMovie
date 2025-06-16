'use client';

import { TArticle } from '@/types/article/article.type';
import React from 'react';
import Link from 'next/link';

type TArticleProps = {
  movie: TArticle;
};

export default function Article({ movie }: TArticleProps) {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={movie.hinhAnh}
        alt={movie.tenPhim}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          {movie.tenPhim}
        </h2>
        <div className="flex space-x-3">
          <Link
            href={`/detail/${movie.maPhim}`}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Xem chi tiết
          </Link>
          <Link
            href = {`/booking/${movie.maPhim}`}
            onClick={() => {}}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            Mua vé
          </Link>
        </div>
      </div>
    </div>
  );
}