import React, { useState } from 'react';
import Modal from '../Common/Modal';
import CustomInput from '../Inputs/CustomInput';
import { logIn } from '../../helpers/auth.helpers';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const SignInForm = ({ setShow }) => {
  const [inputState, setInputState] = useState(initialState);
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  function onChange(e) {
    const { value, name } = e.target;
    setInputState((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSignIn() {
    const { data, message, errorMessages } = await logIn(inputState);
    if (errorMessages) {
      setErrors(errorMessages[0]);
      return;
    } else if (message) {
      setErrors(message);
      return;
    }
    if (data) {
      localStorage.setItem('user', JSON.stringify(data));
        navigate('MainPage');

    }
  }

  const { email, password } = inputState;
  return (
    <Modal
      setShow={setShow}
      className="  bg-neutral-50 signIn-container  text-lg   flex flex-col items-center gap-5 insta-border rounded-2xl " >
      <div className=" bg-emerald-600 text-white font-semibold form-header gothic flex p-6 w-full rounded-t-2xl  border ">

        Sign In
      </div>
      <div className="form-container flex flex-col gap-5 p-6 pb-0 ">
        <CustomInput
          label="Email"
          name="email"
          type="text"
          onChange={onChange}
          value={email}
          className={'w-[300px]'}
          labelStyle={{ color: 'white' }}
        />
        <CustomInput
          label="password"
          name="password"
          type="password"
          onChange={onChange}
          value={password}
          className={'w-[300px]  '}
        />
      </div>
      <div className="error font-normal text-red-700 text-sm">{errors}</div>
      <div className=" monster flex  gap-3 w-full px-5 pb-5">
        <div
          onClick={() => handleSignIn()}
          className="sign-in bg-insta-blue p-2 rounded text-center  bg-cyan-dark  w-full cursor-pointer"
        >
          Sign In
        </div>
        <div
          onClick={() => setShow(false)}
          className=" sign-in color-cyan-medium p-2 rounded text-center w-full cursor-pointer"
        >
          Cancel
        </div>
      </div>
    </Modal>
  );
};

export default SignInForm;
