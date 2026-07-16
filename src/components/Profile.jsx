import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";

function Profile({ name, title, bio }) {
  return (
    <section className="profile">
      
        <div className="profile-card">

        <img 
  src={profileImg} 
  alt="Zarara Profile"
  className="profile-img"
/>

        <h2>{name}</h2>

        <h3>{title}</h3>

        <p>{bio}</p>

      </div>
    </section>
  );
}

export default Profile;