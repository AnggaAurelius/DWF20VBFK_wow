import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
        isLogin: false,
        subscribe: false,
        isAdmin: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "Login_sukses" :
                return {
                    ...state,
                    isLogin: true,
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