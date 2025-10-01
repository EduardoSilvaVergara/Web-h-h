import React, { Fragment, useState } from 'react';
import '../css/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('El correo debe tener un formato válido con @ y punto');
      return;
    }

    if (!password) {
      setError('Por favor ingresa tu contraseña');
      return;
    }

    setError('');
    console.log({ email, password });
  };

  return (
    <Fragment>
      <div className="card bg-custom2 mb-5">
        <div className="card-body">
          <div className="mb-4">
            <a href="#" className="link"></a>
            <i className="bi bi-house-door-fill fs-1"></i>
          </div>

          <div>
            <h2 className="sesion text-center mb-5">Iniciar Sesión</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <p className="text-danger">{error}</p>}

              <div className="mb-5">
                <button type="submit" className="btn btn-warning fw-bold">Ingresar</button>
              </div>
            </form>

            <p className="text">
              ¿No tienes una cuenta? <a href="#" className="link">Regístrate aquí</a>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
