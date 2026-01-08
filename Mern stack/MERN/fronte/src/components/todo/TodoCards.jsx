import React from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";

const TodoCards=({title,body, id ,delid,display})=>{
    return <div className="p-3 todo-cards"><div>
        <h5>{title}</h5>
        <p className="todo-card-p">
            {body}
            </p>
            </div>
            <div className="d-flex justify-content-around card-icon-head px-2 py-1">
                <div
                className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
                onClick={()=>{
                    display("block ");
                    
                }}
                >
                <MdOutlineBrowserUpdated className="card-icons"/>
                Update

                </div>
                <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger"
                 onClick={()=>
                    {delid(id)}}
                 >
                    <MdDelete className="card-icons del"/>Delete
                </div>
                </div></div>
};
export default TodoCards;