import { authSignUp } from 'components/async_redux/authOperators';
import { getInfo } from 'components/async_redux/selectors';
import { authError } from 'components/async_redux/authSlice';
import Form from 'components/form/Form';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Toastify from 'toastify-js';

function Signup() {
  const dispatch = useDispatch();
  const userInfo = useSelector(getInfo);
  const userError = useSelector(state => {
    console.log(state.auth.error);
    return state.auth.error;
  });

  const onSignUpSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(authSignUp({ name, email, password }));
  };

  const toastError = userError => {
    Toastify({
      text: userError,
      duration: 1500,
      close: true,
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
      },
    }).showToast();
  };

  useEffect(() => {
    if (userError !== null) {
      toastError(userError);
    }
    dispatch(authError);
  }, [userError, dispatch]);

  return (
    <div>
      {JSON.stringify(userInfo) === '{}' ? (
        <Form title={'Sign Up'} handleForm={onSignUpSubmit}></Form>
      ) : (
        <Navigate to={'/login'} replace />
      )}
    </div>
  );
}

export default Signup;
