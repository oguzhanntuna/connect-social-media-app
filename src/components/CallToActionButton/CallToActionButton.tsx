import { FC, ReactNode } from "react";

import styles from "./CallToActionButton.module.scss";

type Category = "primary" | "accent";

interface CallToActionButtonProps {
  children: ReactNode;
  category?: Category;
  className?: string;
}

const CallToActionButton: FC<CallToActionButtonProps> = ({
  children,
  category = 'primary',
  className,
}) => {

  return (
    <button className={`${styles.button} ${className ?? ""} ${styles[category]}`}>
      {children}
    </button>
  );
};

export default CallToActionButton;
