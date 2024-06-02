import { Router } from "express";

import { Todo } from "../models/todo"

const router = Router()

let todos : Todo[]  = []

router.get("/",(req,res,next) => {
    res.status(200).json()
})

router.post("/todo",(req,res,next) => {
    const newTodo : Todo = {
        id : new Date().toISOString(),
        text : req.body.text
    }  
    todos.push(newTodo)
    return res.status(202).json({message : "todo added"})
})

router.put("/todo/:todoId",(req,res,next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex((todoitem) => todoitem.id === tid);
    if(todoIndex >= 0){
        todos[todoIndex] = {id: todos[todoIndex].id, text : req.body.text}
        return res.status(200).json({message : "Todo Updated"})
    }
    res.status(400).json({message : "coudnt find todo"})
})

router.delete("/todo/:todoId",(req,res,next) => {
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId)
    res.status(200).json({message : "todo deleted"})
})

export default router