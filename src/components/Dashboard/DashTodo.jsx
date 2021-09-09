import React, { useState, useEffect } from 'react';
import DashFilter from './DashFilter'
import DashNewTodo from './DashNewTodo';
import { useMediaQuery } from 'react-responsive';
import { Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import userStore  from '../Users/GetUsers.js';
import './styles/Dashboard.css';




function DashTodo(props) {


    const currentUser = userStore(state => state.currentUser)

    //todo states
    const urlTodos = userStore(state => state.urlTodos)
    const setTodos = userStore(state => state.setTodos)
    const todos = userStore(state => state.todos)
    const setTodosFilter = userStore(state => state.setTodosFilter)
    const todosFilter = userStore(state => state.todosFilter)


    const screen = useMediaQuery({query: "(min-width: 1024px)"})
    const [check, setCheck] = useState("")

    
    useEffect(() => {
        axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
            setTodos(res.data)
        })       
    } ,[])


    function deleteNote(id)  {
        axios.delete(urlTodos + id)
            .then(() => {
                axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
                    setTodos(res.data)
                })
                console.log('todo delete') 
            })
    }

    function checkbox(id, checked) {
        axios.put((urlTodos + id), { complete : checked })
        .then(() => {
            axios.get(urlTodos + `author/${currentUser._id}`).then(res => {
                setTodos(res.data)
            })
        })        
    }


    return (
        
        <div>
            
            <div className="todo-header-container">
                <DashFilter 
                filter={todosFilter}
                setFilter={setTodosFilter}
                />
                <DashNewTodo />
            </div>
            <div>
                <section>
                    {todos.filter((file) => {
                        if (todosFilter === "") {
                            return file.subject //
                        } else if (file.subject.toLowerCase().includes(todosFilter.toLowerCase())) { //
                            return file.subject //
                        } else return null 
                        }).map((filter, index) => {
                            return (
                                <div className='todo-card'>
                                    <label style={filter.complete ? {cursor:'pointer', display:"flex", flexWrap:"wrap", justifyContent:"flex-start", width:"88%", marginLeft:"10px", height:"100%", textDecoration:"line-through", color:"gray"} : {cursor:'pointer', display:"flex", flexWrap:"wrap", justifyContent:"flex-start", width:"88%", marginLeft:"10px", height:"100%"}}>
                                        <input className="todo-checkbox" type="checkbox" checked={filter.complete} onChange={(e) => checkbox(filter._id, e.target.checked)}/>    
                                        {filter.subject}
                                    </label>
                                    <Button variant="outline-danger" onClick={() => deleteNote(filter._id)} style={{float: "center", padding: "2px 10px 2px 10px"}}>X</Button>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
            
        </div>
    );
}

export default DashTodo;