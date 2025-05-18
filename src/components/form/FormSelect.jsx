const FormSelect = ({ name, value, onChange, placeholder, options = [] }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="">{placeholder}</option>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt.charAt(0).toUpperCase() + opt.slice(1)}
      </option>
    ))}
  </select>
);

export default FormSelect;
