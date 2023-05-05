// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyARzsVfr_CSWGPdCWxd0DMqbAI6bOoptQ8",
  authDomain: "shoeshop-c3c74.firebaseapp.com",
  projectId: "shoeshop-c3c74",
  storageBucket: "shoeshop-c3c74.appspot.com",
  messagingSenderId: "1083269300568",
  appId: "1:1083269300568:web:f4903e74a896614eb3252d",
};

// Send email verification
export const actionCodeSettingsVerification = {
  url:
  process.env.NODE_ENV === 'development' ? 'http://localhost:5173' : ''
}

// Forget password
export const actionCodeSettingsForgotPassword = {
  url:
  process.env.NODE_ENV === 'development' ?
  'http://localhost:5173/login'
  : ''
}