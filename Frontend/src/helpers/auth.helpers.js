import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/';

const auth = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.authorization && user.authorization.token) {
    const headers = { Authorization: `Bearer ${user.authorization.token}` };
    return { headers };
  } else {
    console.log('Token not found in local storage.');
    return {};
  }
};





async function register({ name, email, password }) {
  try {
    const res = await axios.post(`${baseUrl}register`, {
      name,
      email,
      password,
    });
    if (res.status === 201 || res.status === 200) {
      return { data: res.data };
    } else {
      return { message: 'Unexpected response status code' };
    }
  } catch (error) {
    console.log(error);
    const {
      response: {
        data: { message, errors },
      },
    } = error;

    if (errors) {
      const errorMessages = Object.keys(errors).map((key) => {
        const firstError = errors[key][0];
        if (firstError) {
          return firstError;
        }
      });
      return { errorMessages };
    }
    return { message };
  }
}


async function logIn({ email, password }) {
  try {
    const res = await axios.post(`${baseUrl}login`, {
      email,
      password,
    });
    if (res.status === 200) {
      const data = res.data;
      return { data };
    }
  } catch (error) {
    console.log(error);
    const {
      response: {
        data: { message, errors },
      },
    } = error;

    if (errors) {
      const errorMessages = Object.keys(errors).map((key) => {
        const firstError = errors[key][0];
        if (firstError) {
          return firstError;
        }
      });
      return { errorMessages };
    }
    return { message };
  }
}

async function logOut() {
  try {
    const res = await axios.post(`${baseUrl}user/logout`, undefined,
    auth()
    );
    console.log(res.data);
    if (res.status === 200) {
      const data = res.data;
      return { data };
    }
  } catch (error) {
    console.log(error);
    const {
      response: {
        data: { message, errors },
      },
    } = error;

    if (errors) {
      const errorMessages = Object.keys(errors).map((key) => {
        const firstError = errors[key][0];
        if (firstError) {
          return firstError;
        }
      });
      return { errorMessages };
    }
    return { message };
  }
}

export { logIn, auth, logOut, register };
