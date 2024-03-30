import { createSlice } from "@reduxjs/toolkit";
import { InitialTasks } from "../data/data";

// Creating reducers to perform the crud functions globally
const userSlice = createSlice({
    name: "tasks",
    initialState: InitialTasks,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, task } = action.payload;
            const updated = state.find(task => task.id === id);
            if (updated) {
                updated.id = id;
                updated.task = task;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const del = state.find(task => task.id === id)
            if (del) {
                return state.filter(f => f.id !== id)
            }
        }
    }
})

// Exporting the reducers
export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer