import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://shoes-collections.p.rapidapi.com/shoes",
  headers: {
    "X-RapidAPI-Key": "3f8a7bc9efmsh139e44d695e85bdp1d1961jsnde18f2d7b9ba",
    "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
  },
};

// Action
export const fetchShoes = createAsyncThunk("fetchShoes", async () => {
  console.log("Fetch shoes");
  const res = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return res;
});

const shoesSlice = createSlice({
  name: "shoes",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShoes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log(
        "🚀 ~ file: shoesSlice.js:39 ~ builder.addCase ~ state:",
        state.data
      );
      localStorage.setItem("shoes", JSON.stringify(state.data));
    });
    builder.addCase(fetchShoes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchShoes.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default shoesSlice.reducer;
