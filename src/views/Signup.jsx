import Form from 'components/form/Form';
import React from 'react';

function Signup() {
  const onSignUpSubmit = event => {
    event.preventDefault();
    console.log('SignUp');

    console.log(event.target);
  };

  return (
    <div>
      <Form title={'Sign Up'} handleForm={onSignUpSubmit}></Form>
    </div>
  );
}

export default Signup;
