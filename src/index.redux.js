import {
    createStore
} from "redux";
// action
const ADD_GUN = "加机关枪"
const REMOVE_GUN = "减机关枪"

// reducer
export default function counter(state = 10, action) {
    console.log("counter : ", state);
    switch (action.type) {
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state - 1;
        default:
            return 10;
    }
}

// action creator
export function addGun() {
    return {
        type: ADD_GUN
    }
}
export function removeGun() {
    return {
        type: REMOVE_GUN
    }
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000)
    }
}