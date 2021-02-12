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
                        email: action.payload.email,
                        fullName: action.payload.fullName,
                    },
                };
            case "Logout" :
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
                return {
                    ...state,
                    isAdmin: true,
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