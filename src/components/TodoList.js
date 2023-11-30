import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemDelete } from '../components/todoslice';

export const TodoList = () => {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const onComplete = (post) => {
        dispatch(itemDelete({
            id: post.id
        }));
    }
    
    const todoItems = todos.map(todo => (
        <div className='flex flex-row items-center gap-4 bg-blue-200 mx-auto rounded-xl max-w-lg shadow-xl px-6 py-3 my-5 border-2 border-slate-200'>
            <div className='max-h-20 overflow-hidden line-clamp-3'>
                <div className='text-lg font-medium'>
                    <span>{todo.title}</span>
                </div>
                <div className=''>
                    <p className=''>{todo.content}</p>
                </div>
            </div>
            <div className='flex flex-grow justify-end items-center my-auto '>
                <button className='h-10 py-2.5 px-4 float-right text-sm bg-blue-700
                                text-center text-white rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800' onClick={() => onComplete(todo)}>Complete</button>
            </div>
       </div>
    ));

    return (
        <div className='w-2/3 sm:w-2/3 md:w-1/2 lg:w-3/4 mx-auto py-5 '>
            {todoItems}
        </div>
    )
}