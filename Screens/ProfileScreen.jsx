import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../src/features/userSlice";
import { auth } from "../src/firebase";
import Navbar from "../src/Navbar";
import PlanScreen from "./PlanScreen";
import "./styles/ProfileScreen.css";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile </h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3> Available Plans</h3>
              <PlanScreen />
              <button
                className="profileScreen__signOut"
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
