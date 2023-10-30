import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE} from "./CrudTypes"

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
 }
}

export const removeNote = (id) => {
    return {
        type: REMOVE_NOTE,
        payload: id
     }
}

export const updateNote = (id,title,description) => {
    return {
      type: UPDATE_NOTE,
      payload: {
        id,
        title,
        description,
      }
    }
}