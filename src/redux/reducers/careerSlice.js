import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  careers: [],
  career: {},
  error: null,
};

const careerSlice = createSlice({
  name: "career",
  initialState,
  reducers: {
    careerRequest(state) {
      state.loading = true;
      state.error = null;
    },
    careerFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addCareerSuccess(state, action) {
      state.loading = false;
      state.careers.push(action.payload.application); // matches backend response structure
    },
    fetchCareersSuccess(state, action) {
      state.loading = false;
      state.careers = action.payload.applications; // matches backend response
    },
    getCareerByIdSuccess(state, action) {
      state.loading = false;
      state.career = action.payload.application;
    },
    deleteCareerSuccess(state, action) {
      state.loading = false;
      state.careers = state.careers.filter(
        (career) => career._id !== action.payload
      );
    },
  },
});

export const {
  careerRequest,
  careerFail,
  addCareerSuccess,
  fetchCareersSuccess,
  getCareerByIdSuccess,
  deleteCareerSuccess,
} = careerSlice.actions;

export default careerSlice.reducer;
