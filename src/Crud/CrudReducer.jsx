import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "./CrudTypes"

const initialState = {
  notes: [
    {
      id: "1698657258295",
      title: "Feedbacks",
      description:
        "lorem Digital feedback management system. we will provide with their class id and password ",
    },
    {
      id: "1698657248695",
      title: "Weekly Tasks",
      description:
        "lorem jiook nprn management system. we will provide a link to students within a few minutes the whole class",
    },
    {
      id: "1698951258295",
      title: "Lyrics",
      description:
        "lorem Digital feedback management system. we will provide a link to students with their class id and password, and boom within a few minutes the whole class or say ...",
    },
  ],
};
     
export const CrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state, notes:[...state.notes,action.payload]
            }
        case REMOVE_NOTE:
            return {
                ...state, notes:state.notes.filter((u)=> u.id !== action.payload)
            }
        case UPDATE_NOTE:
            let {id,title,description} = action.payload
            return {
                ...state,
                notes:state.notes.map((note) => note.id === id ? {...note,title,description}:note)
            }
        default:
            {
               return state
            }
     }
    }
     
 