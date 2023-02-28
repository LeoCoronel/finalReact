import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import NotFound from "./Pages/NotFound/NotFound";
import LoginForm from "./Pages/Auth/LoginForm";
import { Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/slices/userSlice";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import User from "./Pages/User/User";

function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      onSnapshot(userRef, snapShot => {
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      }
      );
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, setCurrentUser);
    return () => unsuscribe();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path='login' element={<LoginForm />} />
        <Route 
          path='/user'
          element={
            <ProtectedRoute redirectTo='/login' >
              <User />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/payment'
          element={
            <ProtectedRoute redirectTo='/login' >
              <p>PAYMENT</p>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
