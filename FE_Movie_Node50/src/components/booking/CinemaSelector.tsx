interface Props {
  cinemas: any[];
  selectedCinema: number | "";
  onChange: (value: number) => void;
  isLoading: boolean;
}

const CinemaSelector = ({ cinemas, selectedCinema, onChange, isLoading }: Props) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">Chọn rạp</label>
      <select
        value={selectedCinema}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-2 border rounded"
      >
        <option value="">-- Chọn rạp --</option>
        {isLoading ? (
          <option disabled>Đang tải rạp...</option>
        ) : (
          cinemas.map((cumRap) => (
            <optgroup
              key={cumRap.maCumRap}
              label={`${cumRap.tenCumRap} - ${cumRap.diaChi}`}
            >
              {cumRap.Cinema?.map((rap: any) => (
                <option key={rap.maRap} value={rap.maRap}>
                  {rap.tenRap}
                </option>
              ))}
            </optgroup>
          ))
        )}
      </select>
    </div>
  );
};

export default CinemaSelector;
