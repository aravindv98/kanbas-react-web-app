import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: { name: "New assignment", description: "New Description" },
};

const assignmentSlice = createSlice({
  name: "assignents",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload },
          ...state.assignments,
      ];
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assigment) => {
        if (assigment._id === action.payload._id) {
          return action.payload;
        } else {
          return assigment;
        }
      });
    },

    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },

    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment, setAssignments, resetAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;