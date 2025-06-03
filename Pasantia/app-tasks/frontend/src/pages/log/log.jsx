import "bootstrap/dist/css/bootstrap.min.css";
import "./log.css";
import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (userName.trim()) {
      window.location.href = `./user/${userName}`
    }else{
      alert('Debes rellenar todos los campos')
    }
  }

  return (
    <>
      <div className="form border d-flex flex-column p-5">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Ingresa tu nombre
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="inputUser"
            placeholder="Nombre"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label for="exampleFormControlTextarea1" className="form-label">
            Ingresa tu contraseña
          </label>
          <input
            required
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="cont_btn_submit">
          <a id="link" href="#">
            <button
              type="submit"
              id="btnSubmitLogin"
              className="btn fs-5 container btn-success mb-3"
              onClick={handleLogin}
            >
              Enviar
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Login;
