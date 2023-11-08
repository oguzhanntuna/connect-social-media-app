"use client";

import React, { useState } from "react";
import { CallToActionButton, Input, Link, Logo } from "@/components";

import styles from "./page.module.scss";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.loginPage}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.loginContainer}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            <Input
              type="text"
              label="Username"
              name="username"
              value={username}
              containerClassname={styles.usernameContainer}
              onChange={setUsername}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              value={password}
              containerClassname={styles.passwordContainer}
              onChange={setPassword}
            />
            <CallToActionButton
              className={styles.loginCta}
              onClick={() => console.log("login clicked!!")}
            >
              Login
            </CallToActionButton>
          </div>
          <div className={styles.seperatorContainer}>
            <div className={styles.line} />
            <span className={styles.text}>OR</span>
            <div className={styles.line} />
          </div>
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
