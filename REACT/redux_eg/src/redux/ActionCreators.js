//action creators for the project

import { ADD_CONTACT, REMOVE_CONTACT } from "./ActionType";

export function addContact(contact){

    return {
        type: ADD_CONTACT,
        payload: contact
    }
}

export function removeContact(email){

    return {
        type: REMOVE_CONTACT,
        email : email
    }
}
// export function removeAll(){
//     return {
//         type: REMOVE_CONTACT
//     }
// }