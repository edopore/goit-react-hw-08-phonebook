import Form from 'components/form/Form';
import React from 'react';

function Login() {
  const onLoginSubmit = event => {
    console.log('Login');
    event.preventDefault();

    console.log(event.target);
  };
  return (
    <div>
      <Form title={'Login'} handleForm={onLoginSubmit}></Form>
    </div>
  );
}

export default Login;
