import React, { useState } from 'react'
import './todo.css'

const Todo = () => {
  // TODO ALL STATE
  const [todo,setTodo] = useState('')
  const [todoArray,setTodoArray] = useState([]);
  const [updetBtn,setUpdetBtn]= useState(false);
  const [upIndex,setUpIndex]= useState('');
  const [error,setError]= useState('')




  // INPUT CHANGE
  const handleChange = (e) =>{
    setTodo(e.target.value)
    
  }

  // ADD TODO BUTTON
  const handleAddTodd = () =>{
    let splitArray=todo.split("");

      if(!todo){
        setError('please inter your list')
      }else{
        if(splitArray[0]-11){
          setError('number is not allaw')
        }else{
          setError('')
          todoArray.push({
            todo:todo
          })
          let newTodo = [...todoArray]
          setTodoArray(newTodo)
          setTodo('')
        }
      }
  }

  // TODO DELETE BUTTON
  const handleDelete = (index) =>{
    todoArray.splice(index,1);
    let newTodo = [...todoArray]
    setTodoArray(newTodo)
  }
  // TODO EDIT BUTTON
  const handleEdit = (item,index) =>{
    setTodo(item)
    setUpIndex(index)
    setUpdetBtn(true)


  }
  // TODO UPDET BUTTON
  const handleUpdet = () =>{
    let splitArray=todo.split("");

    if(!todo){
      setError('please inter your list')
    }else{
      if(splitArray[0]-11){
        setError('number is not allaw')
      }else{
        setError('')
        todoArray[upIndex]={
          todo:todo
        }
        let newTodo = [...todoArray]
        setTodoArray(newTodo)
        setUpdetBtn(false)
        setTodo('')
      }
    }

  }


  return (
    <div className='todo'>
      <h1>TODO LIST</h1>
      <input onChange={handleChange} type="text" placeholder='please inter your todo' value={todo} />
      {updetBtn 
       ?<button onClick={handleUpdet}>updet</button>
      : <button onClick={handleAddTodd}>add todo</button>
    }
    {error && <p className='error'>{error}</p>}
      {todoArray.map((todoItem,index)=>(
          <li key={index}>{todoItem.todo}<span><button onClick={()=>handleEdit(todoItem.todo,index)}>edit</button><button onClick={()=>handleDelete(index)}>delete</button></span></li>
      ))}
    </div>
  )
}

export default Todo