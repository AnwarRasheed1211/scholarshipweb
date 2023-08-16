// components/Profile.js
import styles from "../components/Profile.module.css";
const Profile = ({ user }) => {
  return (
    <div className={styles["profile-page"]}>
      <div className="profile-image">
        <img src={user.profileImage} width={50} height={50} alt={`${user.name}'s profile`} />
      </div>
      <div className="profile-details">
        <h1>{user.name}</h1>
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
        {/* Add more profile information */}
      </div>
    </div>
  );
};

export default Profile;
