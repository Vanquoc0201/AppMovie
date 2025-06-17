import dayjs from "dayjs";

export const DateTimeInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (isoString: string) => void;
}) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">Ngày giờ chiếu</label>
    <input
      type="datetime-local"
      value={value ? dayjs(value).format("YYYY-MM-DDTHH:mm") : ""}
      onChange={(e) => onChange(new Date(e.target.value).toISOString())}
      className="w-full p-2 border rounded"
    />
  </div>
);

export const PriceInput = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">Giá vé</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full p-2 border rounded"
    />
  </div>
);
