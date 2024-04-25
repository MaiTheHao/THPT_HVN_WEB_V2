import React, { useRef } from 'react';
import Middle from './Middle';
import "./main.scss";
import { Route, Routes, useLocation} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

function Login({baseUrl, HVNICON}) {
    const location = useLocation();
    const from = useRef(location?.state?.from);
    return (
        <div id="comp_Login">
            <Routes>
                <Route path="/" element={<Middle HVNICON={HVNICON}/>}></Route>
                <Route path="signin" element={<Signin baseUrl={baseUrl} HVNICON={HVNICON} from={from.current}/>}></Route>
                <Route path="signup" element={<Signup baseUrl={baseUrl} HVNICON={HVNICON}/>}></Route>
            </Routes>
        </div>
    )
};

export default Login;