import React, { useEffect, useRef, useState } from "react";
import classes from "./Login.module.scss";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { login, signUp } from "../../store/auth-actions";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [params] = useSearchParams();
  const isLogin = params.get("mode") === "login";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uiMessage = useSelector((state) => state.ui);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitial, setIsInitial] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        setError("Password is not the same ");
        return;
      }
    }

    try {
      setIsInitial(false);
      setLoading(true);
      if (params.get("mode") === "signup") {
        await dispatch(
          signUp(
            emailRef.current.value,
            passwordRef.current.value,
            nameRef.current.value
          )
        );
      }

      if (params.get("mode") === "login") {
        await dispatch(
          login(emailRef.current.value, passwordRef.current.value)
        );
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!isInitial) {
      if (!loading) {
        if (uiMessage.message) {
          setError(uiMessage.message);
        } else {
          navigate("/");
        }
      }
    }
  }, [uiMessage, isInitial, loading]);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className="heading-h2">{isLogin ? "Log in" : "Sign up"}</h2>

        {error && (
          <div className={classes.error}>
            <p>{error}</p>
          </div>
        )}

        <form className={classes.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <div className={classes.name}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" ref={nameRef} />
            </div>
          )}

          <div className={classes.email}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.password}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>

          {!isLogin && (
            <div className={classes.passwordConfirm}>
              <label htmlFor="passwordConfirm">Password confirm</label>
              <input
                type="password"
                id="passwordConfirm"
                ref={passwordConfirmRef}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{ opacity: loading ? 0.5 : 1 }}
          >
            {isLogin ? "Log in" : "Sign up"}
          </button>
        </form>

        <div className={classes.mode}>
          <p>
            {isLogin
              ? "You have not account"
              : "You have alredy have an account"}
          </p>
          <Link to={isLogin ? "/auth?mode=signup" : "/auth?mode=login"}>
            {isLogin ? "Create an account" : "Log in"}
          </Link>
        </div>
      </div>
    </section>
  );
}
