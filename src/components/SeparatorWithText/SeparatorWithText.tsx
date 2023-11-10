import { Line } from "../Line";

import styles from "./SeparatorWithText.module.scss";

interface SeparatorWithTextProps {
  text: string;
  containerClassName?: string;
}

export const SeparatorWithText: React.FC<SeparatorWithTextProps> = ({
  text,
  containerClassName,
}) => (
  <div className={`${styles.container} ${containerClassName ?? ""}`}>
    <Line />
    <span className={styles.text}>{text}</span>
    <Line />
  </div>
);
