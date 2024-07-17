import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css';
import { useLocalStorage } from '../useLocalStorage';

const Login = () => {
    useEffect(() => {
        // Añadir la clase al body cuando el componente se monte
        document.body.classList.add('login-body');

        // Limpiar la clase del body cuando el componente se desmonte
        return () => {
            document.body.classList.remove('login-body');
        };
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [users] = useLocalStorage('users', []);
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            history('/project-form');
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Usuario</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Ingresar</button>
            </form>
            <button onClick={() => history('/register')} className="secondary-button">Registrar</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Login;
