// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  actionCodeSettingsForgotPassword,
  actionCodeSettingsVerification,
  firebaseConfig,
} from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  query,
  orderBy,
  where,
  getDocs,
  QuerySnapshot,
  onSnapshot,
  collection,
} from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth || !userAuth.emailVerified) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem("username"),
        email,
        photoURL,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

export const firestore = getFirestore(app);

export const auth = getAuth();
auth.useDeviceLanguage();

// Create user
export const createUser = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>
    sendEmailVerification(
      userCredential.user,
      actionCodeSettingsVerification
    ).then(() => {
      alert(`Verification message send to ${email}`);
      localStorage.setItem("username", displayName);
    })
  );
};

// Login
export const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

// Forgot pass
export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
    () => alert("Sent password recovery mail to: ", email)
  );

// Create order
export const createOrderDocument = async (order) => {
  if (!order) return;

  const orderRef = doc(firestore, `orders/${order.orderId}`);
  const snapShot = await getDoc(orderRef);

  if (!snapShot.exists()) {
    const createdAt = new Date().toUTCString();
    try {
      await setDoc(doc(firestore, `orders/${order.orderId}`), {
        userId: order.userId,
        shippingDetails: {
          ...order.shippingDetails,
        },
        items: [...order.cart],
        total: order.totalPrice,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return orderRef;
};

// Obtain orders
export const getOrders = async (userId, currentOrderInRedux, cb, action) => {
  if (!userId) throw new Error("");

  const getOrdersQuery = query(
    collection(firestore, "orders"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );

  // Set orders
  let orders = await getDocs(getOrdersQuery)
    .then((querySnapshot) => {
      let orders = [];

      querySnapshot.forEach(async (document) => {
        orders = [...orders, { id: document.id, ...document.data() }];
        const orderRef = doc(firestore, `orders/${document.id}`);

        let documentStatus = document.data().status;
        if (!currentOrderInRedux) {
          onSnapshot(orderRef, (snapShot) => {
            const staleData = snapShot.get("status") !== documentStatus;
            documentStatus = snapShot.get("status");
            staleData && cb(action(userId));
          });
        }
      });
      return orders;
    })
    .catch((error) => console.error(error));

  return orders;
};

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
