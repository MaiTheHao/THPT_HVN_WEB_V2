import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import useAppContext from '../../../Context/UseAppContext'

function Signin({ baseUrl, ICON, from }) {
    const navigate = useNavigate();
    const [loginerr, setLoginerr] = useState('')

    const [values, setValues] = useState({ account: '', password: '' });
    const setValuesFunc = ({ target: { name, value } }) => setValues(prev => ({ ...prev, [name]: value }));

    const { setAuth } = useAppContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Lấy giá trị từ các trường input
            const { account, password } = values;

            // Kiểm tra dữ liệu đầu vào
            if (!account || !password) {
                throw new Error('Username and password are required fields!');
            }

            // Chuẩn bị dữ liệu cho request
            const data = { account, password };

            // Gửi request đăng nhập
            const response = await axios.post('/login', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            // Xử lý kết quả đăng nhập
            if (response?.data?.loginsuccess) {
                setAuth({
                    userName: response.data?.userName,
                    loginsuccess: true,
                })
                navigate(from || "/home", { replace: true });

                setValues({ account: '', password: '' })
            } else {
                // Xử lý lỗi đăng nhập
                setLoginerr(response.data.error || 'Login failed!');
            }
        } catch (error) {
            // Xử lý lỗi chung
            setLoginerr(error.message || 'An error occurred during login!');
        }
    };

    return (
        <form id="comp_SignIn" className='body' onSubmit={(e) => handleSubmit(e)}>
            <h1>LOGIN <img alt="Icon trường THPT Huỳnh Văn NGhệ" src={ICON}></img></h1>
            <div className="input_block">
                <label htmlFor='account'><FontAwesomeIcon icon={faUser} /></label>
                <input type="text" id="account" name="account" value={values.account} onChange={setValuesFunc} placeholder='Account...'></input>
            </div>
            <div className="input_block">
                <label htmlFor='password'><FontAwesomeIcon icon={faKey} /></label>
                <input type="password" id="password" name="password" value={values.password} onChange={setValuesFunc} placeholder='Password...'></input>
            </div>
            <p id="err">{loginerr}</p>
            <div id="block_container">
                <Link to={`${baseUrl}signup`} className="change btn">Sign up</Link>
                <div></div>
                <button type="submit" className='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Signin