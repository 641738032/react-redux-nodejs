const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export default function auth(state = {
    isAuth: false,
    user: "zhuxl"
}, action) {
    console.log("auth : ", state);
    
    switch (action.type) {
        case LOGIN:
            return { ...state,
                isAuth: true
            }
        case LOGOUT:
            return { ...state,
                isAuth: false
            }
        default:
            return state;
    }
}

// action 
export function login() {
    return {
        type: LOGIN
    }
}
export function logout() {
    return {
        type: LOGOUT
    }
}