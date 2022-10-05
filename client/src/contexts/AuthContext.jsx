import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api, createSession } from '../services/Api'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [])

    // const login = async(email, password) => {
    //     const response = await createSession(email, password)
    //     //console.log("login", response.data)

    //     const loggedUser = response.data;
    //     const token = response.data.token;

    //     localStorage.setItem("token", token);

    //     api.defaults.headers.Authorization = `Bearer ${token}`;

    //     setUser(loggedUser)
    //     navigate("/dashboard") 

    // }


    const login = (email, password) =>{
        // console.log("login", {email, password})
        if(email === 'angel@email.com'){
            setUser({email})
            navigate('/dashboard')
        }
    }

    const logout = () => {
        // localStorage.removeItem("token");
        // api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/');
    }

    return(
        <AuthContext.Provider 
        value={{
            authenticated: !!user, user, loading, login, logout
        }}
        >
            { children }
        </AuthContext.Provider>
    )
}