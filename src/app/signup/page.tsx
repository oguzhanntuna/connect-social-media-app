"use client";

import { CallToActionButton, Logo, Link, Input, SeparatorWithText } from "@/components";

import styles from "./page.module.scss";
import { useState } from "react";

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const submitSignupForm = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("signup clicked!!");
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.signupContainer}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            <form className={styles.signupForm} onSubmit={(event) => submitSignupForm(event)}>
              <Input
                type="text"
                label="Username"
                value={username}
                onChange={setUsername}
              />
              <Input
                type="text"
                label="E-mail"
                value={email}
                onChange={setEmail}
              />
              <Input
                type="text"
                label="Password"
                value={password}
                onChange={setPassword}
              />
              <Input
                type="text"
                label="Confirm password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                containerClassname={styles.confirmPasswordInputContainer}
              />
              <CallToActionButton
                type="submit"
                containerClassname={styles.signupCta}
              >
                Sign up
              </CallToActionButton>
            </form>
          </div>
          <SeparatorWithText text="OR" />
          <div className={styles.loginContainer}>
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
