const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="textarea-container">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="textarea"
        defaultValue={defaultValue}
      />
    </div>
  );
};
const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="input-box"
      />
    </div>
  );
};
export default Contact;