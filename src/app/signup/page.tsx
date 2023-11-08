"use client";

import { CallToActionButton, Logo, Link } from "@/components";

import styles from "./page.module.scss";

const SignupPage: React.FC = () => {
  return (
    <div className={styles.signupPage}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            {/* Inputs here */}
            <CallToActionButton
              className={styles.loginCta}
              onClick={() => console.log("signup clicked!!")}
            >
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
              <Link href="/login" behaviour="nextLink">
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
