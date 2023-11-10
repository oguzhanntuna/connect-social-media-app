import { ReactNode } from "react";

import styles from "./CallToActionButton.module.scss";

type Category = "primary" | "accent";

type ButtonType = "button" | "submit" | "reset";

interface CallToActionButtonProps {
  children: ReactNode;
  type: ButtonType;
  onClick?: () => void;
  category?: Category;
  containerClassname?: string;
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  children,
  type,
  onClick,
  category = "primary",
  containerClassname,
}) => {
  return (
    <div className={containerClassname}>
      <button
        className={`${styles.button} ${styles[category]}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
