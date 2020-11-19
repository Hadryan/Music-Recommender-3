// import { ILoginReducer } from "../interfaces/ILoginReducer";

export const LoginReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            }
        case 'logout':
            return {
                ...state,
                user: "",
                isLoggedIn: false,
            }
        default:
            break;
    }
}