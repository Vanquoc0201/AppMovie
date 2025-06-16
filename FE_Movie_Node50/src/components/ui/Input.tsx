type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: InputFieldProps) => {
  return (
    <div>
      <label className="block font-semibold text-black">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-black px-3 py-2 rounded focus:outline-none focus:border-red-600"
      />
    </div>
  );
};
