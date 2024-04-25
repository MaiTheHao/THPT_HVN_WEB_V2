import React, { useState } from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faKey, faShieldHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Signup({ baseUrl, HVNICON }) {
    const [loginerr, setLoginerr] = useState('')
    const [values, setValues] = useState({ account: '', password: '', cpassword: '' });
    const setValuesFunc = ({ target: { name, value } }) => setValues(prev => ({ ...prev, [name]: value }));

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Lấy giá trị từ các trường input và kiểm tra dữ liệu đầu vào cơ bản
            const { account, password, cpassword } = values;
            if (!account || !password) {
                throw new Error('Account and password are required fields!');
            }

            if (cpassword !== password) {
                throw new Error('The confirmation password is incorrect!');
            }

            // Chuẩn bị dữ liệu cho request
            const data = { account, password };

            // Gửi request với xử lý lỗi
            const response = await axios.post('/signup', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            // Xử lý khi đăng ký thành công
            if (response.data.signupsuccess) {
                navigate(`${baseUrl}signin`)
                setValues({ account: '', password: '', cpassword: '' })
            } else {
                // Xử lý lỗi đăng ký phía server (ví dụ: tài khoản đã tồn tại)
                setLoginerr(response.data.error || 'Account already exists!');
            }
        } catch (error) {
            // Xử lý lỗi phía client và server một cách linh hoạt
            setLoginerr(error.message || 'An error occurred during registration!');
        }
    };


    return (
        <form id="comp_SignUp" className='body' onSubmit={handleSubmit}>
            <h1>SIGN UP <img alt="Icon trường THPT Huỳnh Văn NGhệ" src={HVNICON}></img></h1>
            <div className="input_block">
                <label htmlFor='account'><FontAwesomeIcon icon={faUser} /></label>
                <input type="text" id="account" name="account" onChange={setValuesFunc} placeholder='Account...'></input>
            </div>
            <div className="input_block">
                <label htmlFor='password'><FontAwesomeIcon icon={faKey} /></label>
                <input type="password" id="password" name="password" onChange={setValuesFunc} placeholder='Password...'></input>
            </div>
            <div className="input_block">
                <label htmlFor='cpassword'><FontAwesomeIcon icon={faShieldHeart} /></label>
                <input type="password" id="cpassword" name="cpassword" onChange={setValuesFunc} placeholder='Confirm password...'></input>
            </div>
            <p id="err" style={{ color: "red" }}>{loginerr}</p>
            <div id="block_container">
                <Link to={`${baseUrl}signin`} className="change btn">Login</Link>
                <div></div>
                <button type="submit" className='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Signup