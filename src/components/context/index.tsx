'use client'

import React, { SetStateAction, createContext, useContext, useState, Dispatch} from 'react'


interface Context{
    username: String | null;
    setUsername:Dispatch<SetStateAction<String | null>>

    password: String | null;
    setPassword: Dispatch<SetStateAction<String | null>>;

    login: Boolean;
    setLogin: Dispatch<SetStateAction<Boolean>>;
 
}

export const UserContext= createContext<Context | null>(null)


const ContextAPI = ({children}:any) => {
    const [username, setUsername] = useState<String | null>(null);
    const [user, setUser] = useState<String | null>("");
    const [password, setPassword] = useState<String | null>("");
    const [login, setLogin] = useState<Boolean>(false);
 
  return (
    <UserContext.Provider value={{username, setUsername, password, setPassword, login, setLogin}}>{children}</UserContext.Provider>
  )
}

export default ContextAPI