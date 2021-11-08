import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";

const LoginForm = () => {
  const { loginUser } = useUser();
  const initialValues = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (userData.username !== "" && userData.password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userData.password, userData.username]);

  const onChange = (event) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(userData);
    setUserData(initialValues);
  };

  return (
    <form
      className="form-inline col-4 text-center"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
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
      <button
        type="submit"
        className="btn btn-primary mt-3"
        disabled={isDisabled}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
