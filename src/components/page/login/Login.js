import React, { useRef } from 'react';
import Middle from './Middle';
import "./main.scss";
import { Route, Routes, useLocation} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

function Login({baseUrl, ICON}) {
    const location = useLocation();
    const from = useRef(location?.state?.from);
    return (
        <div id="comp_Login" className='web_Component'>
            <Routes>
                <Route path="/" element={<Middle ICON={ICON}/>}></Route>
                <Route path="signin" element={<Signin baseUrl={baseUrl} ICON={ICON} from={from.current}/>}></Route>
                <Route path="signup" element={<Signup baseUrl={baseUrl} ICON={ICON}/>}></Route>
            </Routes>
        </div>
    )
};

export default Login;