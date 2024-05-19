import { getAuthInfo, getUserInfo } from 'components/async_redux/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserMenu.css';
import { authLogOut } from 'components/async_redux/authOperators';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfo);
  const authInfo = useSelector(getAuthInfo);
  const handleLogOut = event => {
    event.preventDefault();
    dispatch(authLogOut(authInfo));
  };

  return (
    <div className="user-menu">
      <p className="user-message">Welcome, {userInfo.email}!</p>
      <button className="btn btn-cancel" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}
