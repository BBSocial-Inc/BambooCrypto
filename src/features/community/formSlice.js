import { createSlice } from "@reduxjs/toolkit";

const communityFormSlice = createSlice({
  name: "community",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    numberOfMembers: "0",
    founderName: "",
    table: "Community",
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
        numberOfMembers: "0",
        founderName: "",
      };
    },
  },
});

export const { setFormData, resetForm } = communityFormSlice.actions;
export default communityFormSlice.reducer;
