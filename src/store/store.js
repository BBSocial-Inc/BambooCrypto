// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/individual/formSlice";
import communityFormReducer from "../features/community/formSlice";
import projectFormReducer from "../features/project/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    community: communityFormReducer,
    project: projectFormReducer,
  },
});
