import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../type/todosType";

const initial_state={
    counterID : 0,
    list:[
        {id:0,text:"",isDone : false}
    ]
}

const todosReducer = (state=initial_state,action) => {
    switch (action.type) {
        case ADD_TODO:
            return{
                ...state,
                counterID : state.counterID +1,
                list:[
                    ...state.list,
                    {id : state.counterID,text : action.payload,isDone : false}
                ]
            }
        case DELETE_TODO:
            return{
                ...state,
                list:state.list.filter((item) => item.id !== action.payload)
            }
        case TOGGLE_TODO:
            return{
                ...state,
                list : state.list.map((item) => item.id === action.payload ? {...item,isDone : !item.isDone} : item )
            }
    
        default:
            return state
    }
}

export default todosReducer;