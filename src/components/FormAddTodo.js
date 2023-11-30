import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemAdd } from '../components/todoslice';

export const FormAddTodo = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const dispatch = useDispatch();

    const onAddTodo = () => {
        if (title && content) {
            dispatch(itemAdd(title, content));
            setTitle('');
            setContent('');
            alert('Add todo successfully!');    
        } else {
            alert('Please fill in all fields!');
        }
    }

    return (
        <div className='w-2/3 sm:w-2/3 md:w-1/2 lg:w-2/4 xl:w-1/3 mx-auto pt-2 border-2 border-slate-200 rounded-xl overflow-hidden'>
            <div className='flex flex-col items-center'>
                <textarea className='w-full h-12 border-0 p-2 bg-white focus:ring-0 outline-none text-xl font-medium' placeholder='Title' value={title} onChange={onTitleChanged}></textarea>
                <textarea className='w-full h-32 border-0 p-2 bg-white focus:ring-0 outline-none' placeholder='Write a todo...' value={content} onChange={onContentChanged}></textarea>
                <div className='w-full border-t-2 py-2 border-slate-200 flex bg-slate-50'>
                    <button className='ml-auto py-2.5 px-4 mr-3 font-medium text-center 
                            text-white bg-blue-700 rounded-lg focus:ring-4 w-20
                            focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 items-center"' onClick={onAddTodo}>Add</button>
                </div>
            </div>
        </div>
    );
}