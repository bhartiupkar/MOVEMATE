import React from 'react';

const DropDownInput = ({ label, options = [], value, onChange,labelClass }) => {
  return (
    <div className=" flex flex-col gap-2">
      <label className={labelClass?labelClass:'text-[13px] font-light text-black'}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="p-2 input-box border rounded-md text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-100"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownInput;
