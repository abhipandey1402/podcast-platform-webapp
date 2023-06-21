import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("My User", user);
  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <div className="profileText">
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
    </div>
  );
}

export default Profile;
