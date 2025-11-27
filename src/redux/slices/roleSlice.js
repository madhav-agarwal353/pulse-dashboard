import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRole: "lead", // start as lead to show full dashboard; user can toggle
  currentUserId: "u1",
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole(state, action) {
      state.currentRole = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUserId = action.payload;
    },
  },
});

export const { setRole, setCurrentUser } = roleSlice.actions;
export default roleSlice.reducer;
