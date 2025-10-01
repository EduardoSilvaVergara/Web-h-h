import React, { useState } from 'react';
import '../css/Register.css';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('El correo debe tener un formato válido con @ y punto');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setError('');
    console.log({ nombre, email, password }); // Aquí va la lógica de registro
  };

  return (
      <div className="card bg-custom2">
        <div className="card-body">
          <div className="mb-4">
            <a href="#" className="link"></a>
            <i className="bi bi-house-door-fill fs-1"></i>
          </div>

          <div>
            <h2 className="sesion text-center mb-5">Registrarse</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre Completo:</label>
                <input type="text" id="nombre" className="form-control" value={nombre}
                  onChange={(e) => setNombre(e.target.value)} required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico:</label>
                <input type="email" id="email" className="form-control" value={email}
                  onChange={(e) => setEmail(e.target.value)} required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input type="password" id="password" className="form-control" value={password}
                  onChange={(e) => setPassword(e.target.value)} required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña:</label>
                <input type="password" id="confirmPassword" className="form-control" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} required
                />
              </div>

              {error && <p className="text-danger">{error}</p>}

              <div className="mb-5">
                <button type="submit" className="btn btn-warning fw-bold">
                  Registrarse
                </button>
              </div>
            </form>

            <p className="text">
              ¿Tienes una cuenta? <a href="/" className="link">Iniciar Sesión</a>
            </p>
          </div>
        </div>
      </div>
  );
}
