"use client"
import React, { createContext, useState } from 'react'

export const CreateContextProvider = createContext();

const ContextProvider = ({ children }) => {
     // states
     const [foods, setFoods] = useState("Tanjim");

     // context value
     const contextInfo = {
          foods, setFoods
     }

     return <CreateContextProvider value={contextInfo}>{ children }</CreateContextProvider>
}

export default ContextProvider
