import { ADD_TASK,TOGGLE_TASK,REMOVE_TASK } from "./ActionTypes";

export function addTask(todo){

    return {
        type: ADD_TASK,
        payload: todo
    }
}

export function toggleTask(id){

    return {
        type: TOGGLE_TASK,
        id:id

    }
}

export function removeTask(id){

    return {
        type: REMOVE_TASK,
        id:id
    }

}