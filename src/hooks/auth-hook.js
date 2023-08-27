import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { cartActions } from "../store/cart-slice";

function useAuth() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const serializedUser = {
          uid: user.uid,
          email: user.email,
        };
        dispatch(authActions.setUser(serializedUser));
      } else {
        dispatch(authActions.clearUser());
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (user.user) {
      const setData = async () => {
        if (cartItems.change) {
          await updateDoc(doc(db, "SignupUsers", user.user.uid), {
            userItems: cartItems.items,
            totalValue: cartItems.totalValue,
          });
        }
      };
      setData();
    }
  }, [cartItems.items]);

  useEffect(() => {
    if (user.user) {
      const getItem = async () => {
        const docSnap = await getDoc(doc(db, "SignupUsers", user.user.uid));
        if (docSnap.exists()) {
          dispatch(
            cartActions.replaceItem({
              items: docSnap.data().userItems,
              totalValue: docSnap.data().totalValue,
            })
          );
        }
      };
      getItem();
    }
  }, [user.user?.uid]);

  useEffect(() => {
    if (!user.user) {
      dispatch(
        cartActions.replaceItem({
          items: [],
          totalValue: 0,
        })
      );
    }
  }, [user.user]);

  return {
    loading,
  };
}

export default useAuth;
