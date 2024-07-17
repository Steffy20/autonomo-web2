import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../register.css';
import { useLocalStorage } from '../useLocalStorage';

const Register = () => {
    useEffect(() => {
        // Añadir la clase al body cuando el componente se monte
        document.body.classList.add('registro-body');

        // Limpiar la clase del body cuando el componente se desmonte
        return () => {
            document.body.classList.remove('registro-body');
        };
    }, []);
    
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useLocalStorage('users', []);
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newPassword.length <= 6) {
            setError('La contraseña debe tener más de 6 caracteres');
        } else if (newPassword !== confirmPassword) {
            setError('Las contraseñas no coinciden');
        } else if (users.some(user => user.username === newUsername)) {
            setError('El nombre de usuario ya está en uso');
        } else {
            const newUser = {
                username: newUsername,
                password: newPassword
            };
            setUsers([...users, newUser]);
            alert('Registro exitoso');
            history('/login');
        }
    };

    return (
        <div className="register-container">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="newUsername">Usuario</label>
                    <input 
                        type="text" 
                        id="newUsername" 
                        name="newUsername"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="newPassword">Contraseña</label>
                    <input 
                        type="password" 
                        id="newPassword" 
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Registrar</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Register;
