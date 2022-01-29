import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  students: [],
  isLoading: false,
  isCreating: false,
};

export const studentSlice = createSlice({
  initialState,
  name: "students",
  reducers: {
    getStudents: (state) => {
      state.isLoading = true;
      state.students = [];
      state.error = null;
    },
    getStudentsSuccess: (state, { payload }) => {
      state.error = null;
      state.isLoading = false;
      state.students = [...payload];
    },
    getStudentsFailure: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    createStudent: (state) => {
      state.isCreating = true;
      state.error = null;
    },
    createStudentSuccess: (state, { payload }) => {
      state.error = null;
      state.isCreating = false;
      state.students = [...state.students, payload];
    },
    createStudentFailure: (state, { payload }) => {
      state.error = payload;
      state.isCreating = false;
    },
    deleteStudent: (state) => {
      state.isCreating = true;
      state.error = null;
    },
    deleteStudentSuccess: (state, { payload }) => {
      state.error = null;
      state.isCreating = false;
      state.students = state.students.filter(student => student.studentId !== payload);
    },
    deleteStudentFailure: (state, { payload }) => {
      state.error = payload;
      state.isCreating = false;
    },
    updateStudent: (state) => {
      state.isCreating = true;
      state.error = null;
    },
    updateStudentSuccess: (state, { payload }) => {
      state.error = null;
      state.isCreating = false;
      const newStudents = state.students.filter(student => student.studentId !== payload.studentId);
      state.students = [...newStudents, payload];
    },
    updateStudentFailure: (state, { payload }) => {
      state.error = payload;
      state.isCreating = false;
    },
  },
});

export const {
  getStudents,
  deleteStudent,
  createStudent,
  updateStudent,
  getStudentsSuccess,
  getStudentsFailure,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudentSuccess,
  createStudentSuccess,
  deleteStudentFailure,
  createStudentFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
