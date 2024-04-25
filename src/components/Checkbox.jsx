export const CheckboxInput = ({ id, value, onChange, required }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        value={value}
        id={id}
        name={id}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id}>I CONSENT TO BEING INSULTED LIKE NEVER BEFORE</label>
    </div>
  );
};
