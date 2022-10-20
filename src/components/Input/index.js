const Input = ({ searchValue, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      value={searchValue}
      type="text"
      placeholder="Type your search"
    />
  );
};

export default Input;
