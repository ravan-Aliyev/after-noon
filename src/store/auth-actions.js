import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { auth } from "../firebase";
import { authActions } from "./auth-slice";
import { uiActions } from "./ui-slice";
import { setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";

export const signUp = (email, password, userName) => {
  return async (dispatch) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const serializedUser = {
        uid: res.user.uid,
        email: res.user.email,
      };
      dispatch(authActions.setUser(serializedUser));
      dispatch(uiActions.setMessage(null));

      await setDoc(doc(db, "SignupUsers", serializedUser.uid), {
        userName: userName,
        userItems: [],
        totalValue: 0,
      });
    } catch (err) {
      dispatch(
        uiActions.setMessage(
          err.code.replace("auth", "").replace("/", "").replaceAll("-", " ")
        )
      );
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const serializedUser = {
        uid: res.user.uid,
        email: res.user.email,
      };
      dispatch(authActions.setUser(serializedUser));
      dispatch(uiActions.setMessage(null));
    } catch (err) {
      dispatch(
        uiActions.setMessage(
          err.code.replace("auth", "").replace("/", "").replaceAll("-", " ")
        )
      );
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(authActions.clearUser());
      dispatch(uiActions.setMessage(null));
    } catch (err) {
      dispatch(
        uiActions.setMessage(
          err.code.replace("auth", "").replace("/", "").replaceAll("-", " ")
        )
      );
    }
  };
};
