import styles from "./style.module.scss";
export const Input = ({ label, id, type, placeholder, value, setValue }) => {
  return (
    <div className={styles.inputBox}>
      <label className="paragraph color" htmlFor={id}>
        {label}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
