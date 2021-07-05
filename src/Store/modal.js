import {createSlice} from '@reduxjs/toolkit' 

export const modalSlice = createSlice({
    name:"modal",
    initialState : {
        show:false,
        type:undefined,
        other:{}
    },
    reducers:{
        show:(state,action)=>{
            state.show = true;
            state.type = action.payload
        },
        hide:(state,action)=>{
            state.show = false;
            state.type = undefined;
        }
    }
})

export default modalSlice.reducer;
export const {show,hide} = modalSlice.actions;