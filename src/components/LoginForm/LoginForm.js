import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";

const LoginForm = ({ isAuthenticated }) => {
  const { loginUser, logoutUser } = useUser();
  const initialValues = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setIsDisabled(false);
    } else if (userData.username !== "" && userData.password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isAuthenticated, userData.password, userData.username]);

  const onChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const onLogin = (event) => {
    event.preventDefault();
    loginUser(userData);
    setUserData(initialValues);
  };

  const onLogout = (event) => {
    event.preventDefault();
    logoutUser();
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE);
  };

  return (
    <form
      className="form-inline col-4 text-center"
      noValidate
      autoComplete="off"
      onSubmit={isAuthenticated ? onLogout : onLogin}
    >
      {isAuthenticated ? (
        ""
      ) : (
        <>
          <h5 className="login-title mt-3">Login</h5>
          <div className="input-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={userData.username}
                onChange={(event) => onChange(event)}
              />
            </div>
          </div>
          <div className="input-form mt-3">
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña"
                value={userData.password}
                onChange={(event) => onChange(event)}
              />
            </div>
          </div>
        </>
      )}

      <button
        type="submit"
        className="btn btn-primary mt-3"
        disabled={isDisabled}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
