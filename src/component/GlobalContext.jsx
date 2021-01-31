import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
        isLogin: false,
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