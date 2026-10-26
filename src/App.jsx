
import { useState } from 'react'

import './App.css'

function App() {
  const[title,setTitle]=useState('')
  const[details,setDetails]=useState('')
  const[task,setTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task];
    copyTask.push({title,details})

   setTask(copyTask)
  
   setTitle('')
   setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }



  return(
 <div className='h-screen bg-black lg:flex text-white '>
  <form onSubmit={(e)=>{
    submitHandler(e)
  }} className='flex p-10 flex-col gap-4 lg:w-1/2 items-start'>
    <h1 className='text-4xl font-bold'>Add Notes</h1>

    <input type="text" 
    placeholder='Enter Notes '
    className='px-5 py-2 w-full font-medium 
    border-2 rounded outline-none'
    value={title}
    onChange={(e)=>{
      setTitle(e.target.value)
    }}
     />

     <textarea name="text" 
     placeholder='Enter notes'
     className=' px-5 py-2 w-full font-medium h-40 
     border-2 rounded ontline-none flex items-start
      flex-row'
      value={details}
      onChange={(e)=>{
        setDetails(e.target.value)
      }}>

     </textarea>

     <button className=' active:scale-95 bg-white w-full text-black 
     px-5 py-2 rounded'>
      Add Notes
     </button>

  </form>
  <div className=' lg:w-1/2 lg:border-l-2 p-10 bg-black'>
  <h1 className='text-4xl font-bold'>Recent notes</h1>
   <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
    {task.map(function(elem,idx){
      return  <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 pt-9 pb-5 bg-cover rounded-2xl 
      text-black px-4 bg-[url('https://i.pinimg.com/736x/f5/0e/df/f50edfe30815466af0365273feab15cb.jpg')]">
       
        <div>
          <h3 className='leading-tight text-lg font-bold'>
          {elem.title}</h3>
        <p className='mt-2 leading-tight  text-sm font-medium text-gray-500'>    
         {elem.details}</p>
        </div>
        <button onClick={()=>{
          deleteNote(idx)
        }
         

        }  className='w-full cursur-pointer active:scale-95  py-1 text-xs rounded font-bold bg-red-500 text-white'> Delete</button>
      </div>

    })}
  
   </div>

  </div>


 </div>
  );
}

export default App
