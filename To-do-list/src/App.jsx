import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, {title, desc}])
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    
    let copyTask = [...task];
    copyTask.splice(i, 1);
    setTask(copyTask);
  }

  let renderTask = <h2>No task available</h2>

  if(task.length > 0){
    renderTask = task.map((t, i)=>{
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h2 className='text-2xl font-semibold'>{t.title}</h2> 
            <h2 className='text-xl font-semibold'>{t.desc}</h2>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)
            }
          }
          className='bg-red-400 text-white px-4 py-2 rounded text-xl font-bold'>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>To do List</h1>

      <form onSubmit={submitHandler}>
        <input 
        type="text"
        required
        placeholder='Enter your task'
        className='border-zinc-800 border-4 m-5 px-5 py-2'
        value={title}
        onChange={(e)=>{
        setTitle(e.target.value);
        }}
        />

        <input 
        type="text"
        required
        placeholder='Enter description here'
        className='border-zinc-800 border-4 m-5 px-5 py-2'
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value);
        }}
        />

       <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded'>Add Task</button>
      </form>

      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
}

export default App

