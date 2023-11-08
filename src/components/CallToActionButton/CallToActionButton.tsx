import { ReactNode } from "react";

import styles from "./CallToActionButton.module.scss";

type Category = "primary" | "accent";

interface CallToActionButtonProps {
  children: ReactNode;
  onClick: () => void;
  category?: Category;
  className?: string;
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  children,
  onClick,
  category = 'primary',
  className,
}) => {

  return (
    <button className={`${styles.button} ${className ?? ""} ${styles[category]}`} onClick={onClick}>
      {children}
    </button>
  );
};