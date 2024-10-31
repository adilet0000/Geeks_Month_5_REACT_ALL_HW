import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
   'users/fetchUsers',
   async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return response.json();
   }
);

const userSlice = createSlice({
   name: 'userSlice',
   initialState: {
      users: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
         })
         .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export default userSlice.reducer;
