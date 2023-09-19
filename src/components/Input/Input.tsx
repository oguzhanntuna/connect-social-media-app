import styles from "./Input.module.scss";
import { FC } from "react";

interface InputProps {
  label: string;
  type: "text" | "password";
  value: string;
  name?: string;
  containerClassname?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<InputProps> = ({ label, type, value, name, containerClassname, onChange }) => {
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
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
};

export default Input;
