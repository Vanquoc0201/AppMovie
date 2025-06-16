import { TCinemaSystem } from "@/types/cinema/system.type";
import React from "react";

interface Props {
  systems: TCinemaSystem[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

export default function CinemaSystemSelector({ systems, selectedId, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-6 mb-6">
      {systems.map((system) => (
        <div
          key={system.maHeThongRap}
          className={`cursor-pointer rounded-lg border p-4 w-48 bg-white shadow hover:shadow-md transition ${
            selectedId === system.maHeThongRap ? "border-red-500 ring-2 ring-red-300" : ""
          }`}
          onClick={() => onSelect(system.maHeThongRap)}
        >
          <img
            src={system.logo}
            alt={system.tenHeThongRap}
            className="w-full h-16 object-contain mb-2"
          />
          <p className="text-center font-semibold">{system.tenHeThongRap}</p>
        </div>
      ))}
    </div>
  );
}
