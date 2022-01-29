import axios from "axios";

import { BASE_URL } from "../../constants/variables";
import {
  getStudents,
  deleteStudent,
  createStudent,
  updateStudent,
  getStudentsFailure,
  getStudentsSuccess,
  createStudentSuccess,
  createStudentFailure,
  deleteStudentFailure,
  deleteStudentSuccess,
  updateStudentSuccess,
  updateStudentFailure,
} from "../reducers/studentSlice"

export const fetchStudentsAsync = () => {
  return async (dispatch) => {
    dispatch(getStudents());
    try {
      const response = await axios.get(BASE_URL + "/list");
      dispatch(getStudentsSuccess(response.data));
    } catch ({response}) {
      dispatch(getStudentsFailure(response?.data || "something went wrong!!"));
    }
  };
};

export const createStudentAsync = (data) => {
  return async (dispatch) => {
    dispatch(createStudent());
    try {
      const response = await axios.post(BASE_URL + "/register", data);
      dispatch(createStudentSuccess(response.data));
    } catch ({response}) {
      dispatch(createStudentFailure(response?.data || "something went wrong!!"));
    }
  };
}

export const deleteStudentAsync = (studentId) => {
  return async (dispatch) => {
    dispatch(deleteStudent());
    try {
      await axios.delete(BASE_URL + "/delete/" + studentId);
      dispatch(deleteStudentSuccess(studentId));
    } catch ({response}) {
      dispatch(deleteStudentFailure(response?.data || "something went wrong!!"));
    }
  };
}

export const updateStudentAsync = (studentId, data) => {
  return async (dispatch) => {
    dispatch(updateStudent());
    try {
      const response = await axios.put(BASE_URL + "/update/" + studentId, data);
      dispatch(updateStudentSuccess(response.data));
    } catch ({response}) {
      dispatch(updateStudentFailure(response?.data || "something went wrong!!"));
    }
  };
}
