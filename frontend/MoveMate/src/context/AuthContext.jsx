import React, { createContext, useState } from 'react'





export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({name:"Adity"});
    const [loading, setLoading] = useState(true);

    

    const updateUser=(userData)=>{
        setUser(userData);
        localStorage.setItem("token",userData.token);
        setLoading(false);
    }

    const clearUser = () => {
        setUser(null);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{user,clearUser,updateUser,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
