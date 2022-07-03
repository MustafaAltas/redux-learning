import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import { increase ,decrease,reset} from '../redux/actions/counterActions';

function Counter() {
    const {counter} = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch()
  return (
    <div style={{display : "flex", justifyContent : "center",gap:"2rem"}}>
      <button onClick={() => dispatch(increase())}>+</button>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(decrease())}>-</button> <br /><br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
