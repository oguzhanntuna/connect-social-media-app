import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  type: "text" | "password";
  value: string;
  containerClassname?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  containerClassname,
  onChange,
}) => {
  const inputName = label.toLowerCase().split(" ").join("-");
  const userEnteredValue = value.length > 0;

  return (
    <div className={`${containerClassname ?? ""}`}>
      <label
        className={`${styles.label} ${userEnteredValue ? styles.hasValue : ""}`}
      >
        <div className={styles.labelText}>{label}</div>
        <input
          className={styles.input}
          type={type}
          name={inputName}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
};
