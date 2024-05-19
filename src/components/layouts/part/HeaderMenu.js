import React from 'react'
import useAppContext from '../../../Context/UseAppContext'

function HeaderMenu() {
    const {auth} = useAppContext();

    const logout = () => {
        auth.loginsuccess = false;
    }
  return (
    <div id="menu-pannel">
        <ul>
            <button id="menu-logout" onClick={() => logout()}>Đăng xuất</button>
            <button>Khác</button>
        </ul>
    </div>
  )
}

export default HeaderMenu