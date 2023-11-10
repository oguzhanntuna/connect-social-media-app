"use client";

import React, { useState } from "react";
import { CallToActionButton, Input, Link, Logo, SeparatorWithText } from "@/components";

import styles from "./page.module.scss";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitLoginForm = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("login clicked!!");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            <form onSubmit={(event) => submitLoginForm(event)}>
              <Input
                type="text"
                label="Username"
                value={username}
                onChange={setUsername}
                containerClassname={styles.usernameContainer}
              />
              <Input
                type="password"
                label="Password"
                value={password}
                onChange={setPassword}
                containerClassname={styles.passwordContainer}
              />
              <CallToActionButton
                type="submit"
                containerClassname={styles.loginCta}
              >
                Login
              </CallToActionButton>
            </form>
          </div>
          <SeparatorWithText text="OR" />
          <div className={styles.signupContainer}>
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup" behaviour="nextLink">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
