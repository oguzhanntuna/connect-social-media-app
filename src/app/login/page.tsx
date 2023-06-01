import Link from "next/link";
import styles from "./page.module.scss";

const LoginPage = () => {
  return (
    <div className={styles["login-page"]}>
      <div className={styles["container"]}>
        <div className={styles["container-login"]}>
          <p>Logo</p>
          <p>Input-1</p>
          <p>Input-2</p>
          <button>Login</button>
        </div>
        <div className={styles["container-signup"]}>
          <p>
            Don't have an account? <Link href="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
