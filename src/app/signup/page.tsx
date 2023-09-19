import Logo from "@/components/Icons";
import CallToActionButton from "@/components/CallToActionButton";
import Link from "next/link";

import styles from "./page.module.scss";

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            {/* Inputs here */}
            <CallToActionButton className={styles.loginCta}>
              Sign up
            </CallToActionButton>
          </div>
          <div className={styles.seperatorContainer}>
            <div className={styles.line} />
            <span className={styles.text}>OR</span>
            <div className={styles.line} />
          </div>
          <div className={styles.signupContainer}>
            <p>
              Have an account?{" "}
              <Link className={styles.signupText} href="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
