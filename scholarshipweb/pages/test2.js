import React, { useState } from "react";
import Profile from "../components/Profile";
import styles from "../styles/Profile.module.css";
import Link from "next/link";

export default function ProfilePage() {

  const user = {
    id: 6215106,
    name: "Anwar Rasheed",
    email: "6215106@au.edu",
    profileImage: "/profile_pic.png", // Make sure the image path is correct
    // Add more user information
  };

  return (
    <>
      <div className={styles.line} />
      <div className={styles['body']}>
        <div>
          <div className={styles['profile-page']} />
          <div>
            <Link href={'/studentHome'}>
            <h1 className={styles['textcolor']} >My Profile</h1>
            </Link>
            <Profile user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
