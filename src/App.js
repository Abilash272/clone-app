import React, { createContext, useState } from "react";
import HomePage from "./Page/HomePage/HomePage";
import MainPage from "./Page/MainPage/MainPage";
import SignInPage from "./Page/SignInPage/SignInPage";
import { Routes, Route } from "react-router-dom";

export const AppContext = createContext(null);
function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log("user is ",username);
    return(
            <AppContext.Provider value={{username, setUsername, password, setPassword}}>
                <Routes>
                    <Route exact path="/clone-app" element={<HomePage />} />
                    <Route exact path="/clone-app/signin" element={<SignInPage />} />
                    <Route exact path="/clone-app/watch" element={<MainPage />} />
                </Routes>
            </AppContext.Provider>
    )
}

export default App;