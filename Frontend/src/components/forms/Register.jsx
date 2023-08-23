import React, { useState } from 'react';
import Modal from '../Common/Modal';
import CustomInput from '../Inputs/CustomInput';
import { useNavigate } from 'react-router-dom';
import { register } from '../../helpers/auth.helpers';


const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ setShow }) => {
  const [inputState, setInputState] = useState(initialState);
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  function onChange(e) {
    const { value, name } = e.target;
    setInputState((prev) => ({ ...prev, [name]: value }));
  }

  async function handleRegister() {
    try {
      const { data, errorMessages, message } = await register(inputState);
      if (errorMessages) {
        setErrors(errorMessages[0]);
        return;
      } else if (message) {
        setErrors(message);
        return;
      }
      if (data) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('./SignIn');
      }
    } catch (error) {
      console.log('Error:', error);
  
      if (error.response && error.response.data) {
        const errorData = error.response.data.error || error.response.data;
        const { message, errors } = errorData;
        console.log(error.response.data)

        if (errors) {
          const errorMessages = Object.keys(errors).map((key) => {
            const firstError = errors[key][0];
            if (firstError) {
              return firstError;
            }
          });
          setErrors(errorMessages[0]);
        } else if (message) {
          setErrors(message);
        }
      } else {
        console.log('An unexpected error occurred:', error);
      }
    }
  }
 
  

  const { name, email, password } = inputState;
  return (
    <Modal
      setShow={setShow}
      className="dark:border dark:bg-slate-900 bg-white dark:text-slate-200 signIn-container text-white text-lg flex flex-col items-center gap-5 insta-border rounded-2xl"
    >
      <div className="dark:bg-slate-900 form-header gothic flex p-6 w-full rounded-t-2xl bg-cyan-dark">
        Register
      </div>
      <div className="form-container flex flex-col gap-5 p-6 pb-0">
        <CustomInput
          label="Name"
          name="name"
          type="text"
          onChange={onChange}
          value={name}
          className={'w-[300px]'}
          labelStyle={{ color: 'white' }}
        />
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
          label="Password"
          name="password"
          type="password"
          onChange={onChange}
          value={password}
          className={'w-[300px]'}
        />
      </div>
      <div className="error font-normal text-red-700 text-sm">{errors}</div>
      <div className="monster flex gap-3 w-full px-5 pb-5">
        <div
          onClick={handleRegister}
          className="sign-in bg-insta-blue p-2 rounded text-center text-white bg-cyan-dark w-full cursor-pointer"
        >
          Register
        </div>
        <div
          onClick={() => setShow(false)}
          className="sign-in color-cyan-medium p-2 rounded text-center w-full cursor-pointer"
        >
          Cancel
        </div>
      </div>
    </Modal>
  );
};

export default RegisterForm;
