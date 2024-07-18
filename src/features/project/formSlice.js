import { createSlice } from "@reduxjs/toolkit";

const projectFormSlice = createSlice({
  name: "project",
  initialState: {
    brandName: "",
    email: "",
    existing: "",
    token: "",
    table: "Projects",
  },
  reducers: {
    setFormData(state, action) {
      return { ...state, ...action.payload };
    },
    resetForm(state) {
      return {
        brandName: "",
        email: "",
        existing: "",
        token: "",
      };
    },
  },
});

export const { setFormData, resetForm } = projectFormSlice.actions;
export default projectFormSlice.reducer;
