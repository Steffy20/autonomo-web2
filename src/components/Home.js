// Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../home.css';

const Home = () => {

    useEffect(() => {
        // Añadir la clase al body cuando el componente se monte
        document.body.classList.add('home-body');

        // Limpiar la clase del body cuando el componente se desmonte
        return () => {
            document.body.classList.remove('home-body');
        };
    }, []);
    return (
        <div>
            <div className="background-image"></div>
            <div className="home-container">
                <h1>Bienvenido</h1>
                <div className="button-group">
                    <Link to="/login" className="primary-button">Iniciar Sesión</Link>
                    <Link to="/register" className="secondary-button">Registrarse</Link>
                </div>
            </div>
            <div className="about-us">
                <h2>About Us</h2>
                <p>REGISTRO DE PROYECTOS DE INVESTIGACIÓN DE LA ULEAM</p>
            </div>
        </div>
    );
};

export default Home;
