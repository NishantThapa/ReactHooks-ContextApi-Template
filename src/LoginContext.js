import React, { createContext, useState, useCallback, useEffect } from 'react';
import axios from 'axios'
import { ApiURL } from './Config/ApiURL'

export const LoginContext = createContext({})
export const LoginProvider = ({ children }) => {

    // we need to set state below     
    const [value, setValue] = useState()
    console.log(value)

    // We need to create functions below 
    const handleChange = (e) => {
        setValue(
            { ...value, [e.target.name]: e.target.value });
    }

    // We are using axiosMethods below
    const signin = () => {
        axios.post(`${ApiURL}/public/login`,{
            email: value.email,
            password: value.password
        })
        .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    // We Need to Pass defaultContext (functions&States) Below to get their access in childrens
    const defaultContext = {
        handleChange,
        value,
        signin
    }

    return <LoginContext.Provider value={defaultContext}>{children}</LoginContext.Provider>;
}
