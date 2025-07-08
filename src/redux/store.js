import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./reducers/doctorSlice.js";
import appointmentSlice from "./reducers/appointmentSlice.js";
import userSlice from "./reducers/userSlice.js";
import paymentSlice from "./reducers/paymentSlice.js";
import CareerSlice from "./reducers/careerSlice.js";

const store = configureStore({
  reducer: {
    doctor: doctorSlice,
    appointment: appointmentSlice,
    user: userSlice,
    payment: paymentSlice,
    career: CareerSlice,
  },
});

export default store;
