import React, { useState, useEffect } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";
import axios from "axios";

const Todo = () => {
    const [inputs, setInputs] = useState({ title: "", body: "" });
    const [tasks, setTasks] = useState([]);
    const [isTextareaVisible, setTextareaVisible] = useState(false);
    const [isUpdateVisible, setUpdateVisible] = useState(false);
    const id = sessionStorage.getItem("userId");

    useEffect(() => {
        const fetchTasks = async () => {
            await axios.get(`http://localhost:3000/api/v2/getTasks/${id}`)
            .then((response)=> {console.log(response)});
        };
        fetchTasks();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const submitTask = async () => {
        if (!inputs.title || !inputs.body) {
            toast.error("Title or body should not be empty");
            return;
        }

        if (id) {
            try {
                const response = await axios.post("http://localhost:3000/api/v2/addTask", { title: inputs.title, body: inputs.body, id: id });
                setTasks([...tasks, inputs]);
                setInputs({ title: "", body: "" });
                toast.success("Your task is added");
            } catch (error) {
                toast.error("Your task is not saved! Please signin");
            }
        } else {
            toast.error("Please signin to save tasks");
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleTextareaVisibility = () => {
        setTextareaVisible(!isTextareaVisible);
    };

    const toggleUpdateVisibility = (value) => {
        setUpdateVisible(value === 'block');
    };

    return (
        <>
            <div className="todo">
                <ToastContainer />
                <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
                    <div className="d-flex flex-column todo-inputs-div w-50 p-1">
                        <input 
                            type="text" 
                            placeholder="TITLE" 
                            className="my-2 p-2 todo-inputs" 
                            onClick={toggleTextareaVisibility}
                            name="title"
                            value={inputs.title}
                            onChange={handleInputChange}
                        />
                        {isTextareaVisible && (
                            <textarea 
                                placeholder="BODY"
                                name="body"
                                className="p-2 todo-inputs"
                                value={inputs.body}
                                onChange={handleInputChange}
                            />
                        )}
                    </div>
                    <div className="w-50 d-flex justify-content-end my-3">
                        <button className="home-btn p-2" onClick={submitTask}>Add</button>
                    </div>
                </div>
                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row"> 
                            {tasks.map((task, index) => (
                                <div className="col-lg-3 mx-5 my-2" key={index}>
                                    <TodoCards title={task.title} body={task.body} id={index} delid={deleteTask} display={toggleUpdateVisibility} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isUpdateVisible && (
                <div className="todo-update" id="todo-update">
                    <div className="container update"><Update display={toggleUpdateVisibility} /></div>
                </div>
            )}
        </>
    );
};

export default Todo;
