import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login:null,
}

const slice = createSlice({
    name:"loginSlice",
    initialState,
    reducers:{
        toggleLoginState:(state,action)=>{
            state.login = action.payload
        }
    }
})

//export actions to call them using useReducer
export const {toggleLoginState} = slice.actions

//export reducer to be used in creating store
export default slice.reducer
