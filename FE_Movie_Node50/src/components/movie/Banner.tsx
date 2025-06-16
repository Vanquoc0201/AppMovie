'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TBanner } from '@/types/article/banner.type';
import { useBanners } from '@/hooks/movie/useBanners';

export default function Banner() {
  const { data: banner, isLoading } = useBanners();

  return (
    <div className="w-full mb-8 mt-16">
      {isLoading || !banner ? (
        <p className="text-white text-center">Đang tải banner...</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className=" shadow-xl"
        >
          {banner.map((item : TBanner) => (
            <SwiperSlide key={item.maBanner}>
              <img
                src={item.hinhAnh}
                alt={`Banner ${item.maPhim}`}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}