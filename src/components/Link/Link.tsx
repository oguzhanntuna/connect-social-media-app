import NextLink from "next/link";

import styles from "./Link.module.scss";

type Behaviour = "nextLink" | "link";

interface LinkProps {
  children: string;
  behaviour: Behaviour;
  href: string;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  children,
  behaviour,
  href,
  className,
}) => {
  if (behaviour === "nextLink") {
    return (
      <NextLink className={`${styles.text} ${className ?? ""}`} href={href}>
        {children}
      </NextLink>
    );
  }

  return (
    <a
      className={`${styles.text} ${className ?? ""}`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
