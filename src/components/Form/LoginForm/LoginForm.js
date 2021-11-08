const LoginForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
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
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="E-mail"
          />
        </div>
      </div>
      <div className="input-form mt-3">
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Contraseña"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
