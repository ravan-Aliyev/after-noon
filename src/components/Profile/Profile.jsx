import React from "react";
import classes from "./Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/auth-actions";

function Profile() {
  const email = useSelector((state) => state.auth.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
        />
        <div className={classes.userDetails}>
          <p>{email}</p>
        </div>
        <button onClick={logoutHandler}>Log out</button>
        <button onClick={() => navigate("/auth?mode=login")}>
          Change Account
        </button>
      </div>
    </section>
  );
}

export default Profile;
