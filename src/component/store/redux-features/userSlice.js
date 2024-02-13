import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:JSON.parse(localStorage.getItem("user")) || null
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

        setCurrentUser : (state,action) =>{
            state.currentUser = action.payload
        }

    }
})


export default userSlice.reducer

export const {setCurrentUser} = userSlice.actions

export const selectCurrentUser = (state) =>state.user.currentUser
