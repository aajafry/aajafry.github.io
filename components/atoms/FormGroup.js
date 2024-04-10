export default function FormGroup({
  field,
  label,
  type,
  name,
  id,
  placeholder,
  required,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="text-neutral-800 dark:text-neutral-300">
        {label}
      </label>
      {field == "input" && (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
        />
      )}
      {field == "textarea" && (
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          rows="5"
          cols="30"
        ></textarea>
      )}
    </div>
  );
}
