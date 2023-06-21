import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar">
      <div className="gradient"></div>
      {user ? (
        <div className="links">
          <NavLink to="/">Signup</NavLink>
          <NavLink to="/podcasts">Podcasts</NavLink>
          <NavLink to="/create-a-podcast">Start A Podcast</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
        </div>
      ) : (
        <div className="links">
          <NavLink to="/">Signup</NavLink>
          <NavLink to="/podcasts">Podcasts</NavLink>
          <NavLink to="/create-a-podcast">Start A Podcast</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
