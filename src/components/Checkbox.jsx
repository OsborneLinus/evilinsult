export const CheckboxInput = ({ id, value, onChange, required }) => {
  return (
    <div>
      <label htmlFor={id}>I CONSENT TO BEING INSULTED LIKE NEVER BEFORE</label>
      <input
        type="checkbox"
        value={value}
        id={id}
        name={id}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
