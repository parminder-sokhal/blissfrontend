import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  careerRequest,
  careerFail,
  addCareerSuccess,
  fetchCareersSuccess,
  getCareerByIdSuccess,
  deleteCareerSuccess,
} from "../reducers/careerSlice";

// Add new career application (Public)
export const addCareer = (careerData) => async (dispatch) => {
  try {
    dispatch(careerRequest());

    const { data } = await axios.post(`${server}/career`, careerData);

    dispatch(addCareerSuccess(data));
  } catch (error) {
    dispatch(careerFail(error.response?.data?.message || "Failed to submit career application"));
  }
};

// Get all career applications (Admin only)
export const getCareers = () => async (dispatch) => {
  try {
    dispatch(careerRequest());

    const token = localStorage.getItem("Bearer");

    const { data } = await axios.get(`${server}/careers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(fetchCareersSuccess(data));
  } catch (error) {
    dispatch(careerFail(error.response?.data?.message || "Failed to fetch careers"));
  }
};

// Get career by ID (Admin only)
export const getCareerById = (id) => async (dispatch) => {
  try {
    dispatch(careerRequest());

    const token = localStorage.getItem("Bearer");

    const { data } = await axios.get(`${server}/career/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(getCareerByIdSuccess(data));
  } catch (error) {
    dispatch(careerFail(error.response?.data?.message || "Failed to fetch career by ID"));
  }
};

// Delete career application (Admin only)
export const deleteCareer = (id) => async (dispatch) => {
  try {
    dispatch(careerRequest());

    const token = localStorage.getItem("Bearer");

    const { data } = await axios.delete(`${server}/career/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(deleteCareerSuccess(data));
    dispatch(getCareers());
  } catch (error) {
    dispatch(careerFail(error.response?.data?.message || "Failed to delete career"));
  }
};
