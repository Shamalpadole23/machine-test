import { useState } from "react";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";
import { FcApproval } from "react-icons/fc";
import { BiCheckSquare } from "react-icons/bi";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);

  const[editFormVisibility, setEditFormVisibility]=useState(false);

  const[editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

  return (

    <>
    <div className="wrapper">
    <h1 style={{ marginTop:'2%', fontSize:'3rem'}}> <BiCheckSquare></BiCheckSquare> TODO-LIST</h1> 
    <br></br>
     <div className="card" style={{width:'60%', backgroundColor:'whitesmoke', boxShadow:'0px 1px 5px 0.1px'}}><Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/></div>  <br></br>
      {/* <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/> */}
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/> <br></br>
      {todos.length > 0&&(
         <button className="btn btn-danger btn-md delete-all" 
         onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
    </>
  );
}

export default App;
