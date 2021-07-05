import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        isAuth:false,
        userName:undefined,
        password:undefined
    },
    reducers:{
        login:(state,action)=>{
            state.isAuth = true;
            state.userName = action.payload.userName
            state.password = action.payload.password
        },
        logout:(state)=>{
            state.isAuth = false;
            state.userName = undefined;
            state.password = undefined;
        }
    }
})

export default authSlice.reducer;
export const {login,logout} = authSlice.actions;