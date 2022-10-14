import { ADD_CONTACT, REMOVE_CONTACT } from "../ActionType";

//first dispatch when redux store is created is {type: @@INIT}

const contactReducer = (state=[],action) => {

    switch(action.type){
        case ADD_CONTACT:
            return [...state, {...action.payload}]
        case REMOVE_CONTACT:
            return state.filter(contact => contact.email !== action.email)

        default:
            return state;
    }
}

export default contactReducer;

