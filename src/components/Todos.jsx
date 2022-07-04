import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../redux/actions/todosActions';

function Todos() {
  const [value,setValue] = useState("");
  const {list} = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  console.log(list);

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleAdd = () => {
    dispatch(addTodo(value));
    setValue("")
  };

  const handledelete = (e) => {
    dispatch(deleteTodo(e))
  };

  const handleToggle = (e) => {
    dispatch(toggleTodo(e))
  }
  console.log(value);
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={value}/>
      <button onClick={handleAdd}>Ekle</button> <br /><br />

      <ul>
        {
          list.filter((item) => item.text !== "").map((item) => {
            return(
              <li style={{ textDecoration : `${item.isDone === true ? "underline" : "none"}`}}>{item.text} <span style={{cursor:"pointer"}} onClick={() => handledelete(item.id)}>x</span> <span style={{cursor:"pointer"}} onClick={() => handleToggle(item.id)}>+</span></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todos
