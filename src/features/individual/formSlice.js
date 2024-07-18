import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    table: "Individuals",
  },
  reducers: {
    setFormData(state, action) {
      return { ...state, ...action.payload };
    },
    resetForm(state) {
      return {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
      };
    },
  },
});

export const { setFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
