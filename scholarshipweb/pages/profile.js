import React, { useState } from "react";
import Profile from "../components/Profile";
import styles from "../components/Profile.module.css";
import Link from "next/link";

export default function ProfilePage() {
  const [isCreateFormVisible, setCreateFormVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const user = {
    id: 123,
    name: "John Doe",
    email: "john@example.com",
    profileImage: "/profile_pic.png", // Make sure the image path is correct
    // Add more user information
  };

  return (
    <div>
      <div className={styles.line} />
      <div className={styles['profile-page']} />
      <div>
        <Link href={'/studentHome'}>
          <h1>My Profile</h1>
        </Link>
        <Profile user={user} />
      </div>
    </div>
  );
}
