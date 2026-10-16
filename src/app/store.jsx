import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/state/PlayerSlice"

export let store = configureStore({
    reducer :{
        player : playerReducer,
    },
})