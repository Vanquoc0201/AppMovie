'use client';
import React from 'react';
import clsx from 'clsx';
type SeatProps = {
  tenGhe: string;
  trangThai: 'Trong' | 'DangDat' | 'DaDat';
  isSelected: boolean;
  onSelect: () => void;
};

export default function Seat({ tenGhe, trangThai, isSelected, onSelect }: SeatProps) {
  const color = clsx({
    'bg-white': trangThai === 'Trong' && !isSelected,
    'bg-red-500 text-white cursor-not-allowed': trangThai !== 'Trong',
    'bg-green-500 text-white': isSelected,
  });

  return (
    <button
      disabled={trangThai !== 'Trong'}
      className={`w-10 h-10 m-1 border rounded ${color}`}
      onClick={onSelect}
    >
      {tenGhe}
    </button>
  );
}
