import { createSlice } from "@reduxjs/toolkit";

 let playerSlice = createSlice({
  name: "player",
  initialState: {
    currentplayingsong: null,
    isplaying: false,
  },
  reducers: {
    playnewsong: (state, action) => {
      state.currentplayingsong = action.payload;
      state.isplaying = true;
    },
    play : (state) => {
        state.isplaying  = true;
    },
    pause : (state) => {
        state.isplaying = false; 
    }
  },
});


export let {playnewsong, play , pause} = playerSlice.actions;
export default playerSlice.reducer;