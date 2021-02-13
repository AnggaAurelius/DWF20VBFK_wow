import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
        isLogin: false,
        subscribe: false,
        user: null,
        isAdmin: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "Login_sukses" :
                localStorage.setItem("token", action.payload.token);

                return {
                    ...state,
                    isLogin: true,
                    user: {
                        emaill: action.payload.email,
                        fullName: action.payload.fullName,
                    },
                };
             case "USER_LOADED":
                    return {
                        ...state,
                        isLogin: true,
                        user: {
                        email: action.payload.email,
                        fullName: action.payload.fullName,
                        },
                    };
            case "AUTH_ERROR":
            case "Logout" :
                localStorage.removeItem("token");
                return {
                    ...state,
                    isLogin: false,
                };
            case "premium" :
                return {
                    ...state,
                    subscribe: true,
                };
            case "ADMIN" :
                localStorage.setItem("token", action.payload.token);
                
                return {
                    ...state,
                    isAdmin: true,
                    user: {
                        emaill: action.payload.email,
                        fullName: action.payload.fullName,
                    },
                };
            default:
                throw new Error();
        }
    }

export  const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>
    );
}