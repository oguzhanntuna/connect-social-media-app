"use client";

import React, { FC, useState } from "react";
import Link from "next/link";

import Logo from "@/components/Icons/Logo";
import Input from "@/components/Input";
import CallToActionButton from "@/components/CallToActionButton/CallToActionButton";

import styles from "./page.module.scss";

const LoginPage: FC = () => {
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
            <CallToActionButton className={styles.loginCta}>
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
              <Link className={styles.signupText} href="/signup">
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
