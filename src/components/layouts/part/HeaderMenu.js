import React from 'react'
import useAppContext from '../../../Context/UseAppContext'

function HeaderMenu() {
    const {setAuth} = useAppContext();

    const logout = () => {
      setAuth({ loginsuccess: false });
      window.location.href = '/THPT_HVN/login'; // TES TES TES
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