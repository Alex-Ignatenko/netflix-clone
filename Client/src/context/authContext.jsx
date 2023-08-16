import { createContext, useEffect, useReducer } from "react"
import { authReducer } from "./authReducer.js"


export const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    loading: false,
    console: false
}

export const authContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },[state.userInfo])
return (
<authContext.Provider value={{userInfo: state.userInfo, dispatch}}>
    {children}
</authContext.Provider>
)
}
