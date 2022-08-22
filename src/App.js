import React, { createContext, useState } from "react";
import HomePage from "./Page/HomePage/HomePage";
import MainPage from "./Page/MainPage/MainPage";
import SignInPage from "./Page/SignInPage/SignInPage";
import { Routes, Route } from "react-router-dom";

export const AppContext = createContext(null);

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
            <AppContext.Provider value={{username, setUsername, password, setPassword}}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/watch" element={<MainPage />} />
                </Routes>
            </AppContext.Provider>
    )
}

export default App;