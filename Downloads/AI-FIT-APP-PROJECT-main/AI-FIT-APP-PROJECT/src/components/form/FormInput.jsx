const FormInput = ({ name, value, onChange, placeholder, type = 'text' }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-3 border border-brand rounded-lg bg-white text-brand-dark placeholder:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand transition duration-200"
  />
);

export default FormInput;
