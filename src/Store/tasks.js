import {createSlice} from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name:'tasks',
    initialState:{
        tasks:[],  // {taskId.taskName}
        filterQuery:""
    },
    reducers:{
        addTask:(state,action)=>{
            const task = {
              taskId:Math.random().toString(),
              taskName:action.payload.taskName,
              createdAt:new Date().toLocaleString()
             }
            state.tasks.push(task);
            state.filterQuery = "";
        },
        filterTasks:(state,action)=>{
            state.filterQuery = action.payload;
        },
        editTask:(state,action)=>{
            const id = state.tasks.findIndex(ele=>ele.taskId===action.payload.taskId);

            state.tasks[id].taskName = action.payload.taskName;
        },
        removeTask:(state,action)=>{
            state.tasks = state.tasks.filter(ele=>ele.taskId!==action.payload)
        },
        sort:(state,action)=>{
            if(action.payload)
            {
                state.tasks = state.tasks.sort((a,b)=>  new Date(a.createdAt) - new Date(b.createdAt))
                return
            }

            state.tasks = state.tasks.sort((a,b)=>  -(new Date(a.createdAt) - new Date(b.createdAt)))
        }
    }
})

export default tasksSlice.reducer;
export const {addTask,filterTasks,editTask,sort,removeTask} = tasksSlice.actions;
