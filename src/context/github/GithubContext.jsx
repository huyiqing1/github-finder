import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com";

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
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

    const getUser = async (login) => {
        setIsLoading();
        const response = await fetch(`${GITHUB_URL}/users/${login}`);
        if (response.status === 404) {
            window.location = "/notfound";
        } else {
            const data = await response.json();
            dispatch({
                type: "GET_USER",
                payload: data,
            })
        }
    }

    const getRepos = async (login) => {
        setIsLoading();

        const params = new URLSearchParams({
            sort: "created",
            per_page: 10,
        });

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
        const data = await response.json();
        dispatch({
            type: "GET_REPOS",
            payload: data,
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
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;