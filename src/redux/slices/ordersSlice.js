import { createSlice } from "@reduxjs/toolkit";
import { FirestoreError, collection, getFirestore } from "firebase/firestore";

const db = getFirestore();

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const sliceName = "orders";

const firestoreSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    getDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getDataSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getDataStart, getDataSuccess, getDataFailure } =
  firestoreSlice.actions;

export const fetchData = () => async (dispatch) => {
  dispatch(getDataStart());
  try {
    const collectionRef = collection(db, "data");
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    dispatch(getDataSuccess(data));
  } catch (error) {
    dispatch(getDataFailure(error.message));
  }
};

export default firestoreSlice.reducer;
