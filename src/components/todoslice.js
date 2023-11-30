import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = [
    {id: 1, title: "Read GOD FATHER", content: "Chapter 2 - Why did he came back", isCompleted: false},
    {id: 2, title: "Check system IVA", content: "The Godfather: Directed by Francis Ford Coppola. With Marlon Brando, Al Pacino, James Caan, Richard S. Castellano. Don Vito Corleone, head of a mafia family", isCompleted: false},
]

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        itemAdd: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        isCompleted: false
                    }
                }
            }
        },
        itemDelete(state, action) {
            const { id } = action.payload;
            return state.filter(todo => todo.id !== id);
        },
        itemUpdate(state, action) {
            return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
        },     
    }
});

export const { itemAdd, itemDelete, itemUpdate } = todoSlice.actions;
export default todoSlice.reducer;