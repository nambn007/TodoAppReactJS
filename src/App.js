import './App.css';
import { TodoList } from './components/TodoList';
import { FormAddTodo } from './components/FormAddTodo';

function App() {
  return (
    <div className='md::container md::mx-auto px-4 w-full'>
      <div className='flex flex-col my-10'>
          <h1 className='text-3xl font-bold underline mx-auto'>TODO App</h1>
      </div>

      <FormAddTodo/>    
      <TodoList/>      

    </div>
  );
}

export default App;
