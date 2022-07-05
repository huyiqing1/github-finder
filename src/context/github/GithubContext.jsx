import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com";

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        isLoading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const searchUsers = async (text) => {
        setIsLoading();

        const params = new URLSearchParams({
            q: text,
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
        const { items } = await response.json();
        dispatch({
            type: "GET_USERS",
            payload: items,
        })
    }

    const setIsLoading = () => {
        dispatch({
            type: "SET_ISLOADING",
        })
    }

    const clearUsers = () => {
        dispatch({
            type: "CLEAR_USERS",
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        clearUsers,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;