import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  dateOfBirth: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
