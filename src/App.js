import React, { useLayoutEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import HVNICON from './pic/HVN_icon.jpg';
import AuthUser from './components/AuthUser';

import Login from './components/page/login/Login';
import Home from './components/page/Home/Home';
import useAppContext from './Context/UseAppContext';
import axios from 'axios';

function App() {
    const { setAuth } = useAppContext();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        try {
            axios.get('/userstatus').then((response) => {
                setAuth({
                    loginsuccess: response.data,
                })
            }).finally(() => navigate("/home"))
        } catch (err) {
            console.error(err);
        }
    }, [setAuth, navigate]);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/login/*" element={<Login baseUrl={"/login/"} HVNICON={HVNICON} />}></Route>

            <Route element={<AuthUser />}>
                <Route path="/home" element={<Home />}></Route>
            </Route>

        </Routes>
    )
}

export default App;