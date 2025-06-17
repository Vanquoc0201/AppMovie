import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput = ({ label, name, type, value, onChange, required }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-1 text-sm text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e50914]"
      />
    </div>
  );
};

export default FormInput;
