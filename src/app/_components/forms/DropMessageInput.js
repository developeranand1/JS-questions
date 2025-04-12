const DropMessageInput = ({ label, name, value, onChange, placeholder, error }) => {
    return (
      <div className="mb-3">
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder}
        />
        {error && <div className="text-danger p-1"><small>{error}</small></div>}
      </div>
    );
  };
  
  export default DropMessageInput;
  