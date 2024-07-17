import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../projectForm.css';
import { useLocalStorage } from '../useLocalStorage';

const ProjectForm = () => {


    const [randomImage, setRandomImage] = useState('');
    
    useEffect(() => {
        document.body.classList.add('project-body');
        fetchRandomImage();
        return () => {
            document.body.classList.remove('project-body');
        };
    }, []);

    const fetchRandomImage = async () => {
        try {
            const response = await fetch('https://picsum.photos/300/100'); // Cambiar tamaño según necesites
            if (response.ok) {
                setRandomImage(response.url);
            } else {
                console.error('Error al obtener la imagen');
            }
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
        }
    };
    
    
    useEffect(() => {
        document.body.classList.add('project-body');
        return () => {
            document.body.classList.remove('project-body');
        };
    }, []);

    const [projectTitle, setProjectTitle] = useState('');
    const [description, setDescription] = useState('');
    const [leadResearcher, setLeadResearcher] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [budget, setBudget] = useState('');
    const [error, setError] = useState('');
    const [projects, setProjects] = useLocalStorage('projects', []);
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!projectTitle || !description || !leadResearcher || !startDate || !endDate || !budget || budget <= 0) {
            setError('Todos los campos son obligatorios y el presupuesto debe ser positivo');
        } else {
            const newProject = {
                projectTitle,
                description,
                leadResearcher,
                startDate,
                endDate,
                budget
            };
            setProjects([...projects, newProject]);
            alert('Proyecto registrado exitosamente');
            history('/panel');
        }
    };

    return (
        <div className="project-container">
            <h1>Registro de Proyecto de Investigación</h1>
            <img src={randomImage} alt="Imagen servicio web externo" />
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="projectTitle">Título del Proyecto</label>
                    <input 
                        type="text" 
                        id="projectTitle" 
                        name="projectTitle"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea 
                        id="description" 
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="leadResearcher">Investigador Principal</label>
                    <input 
                        type="text" 
                        id="leadResearcher" 
                        name="leadResearcher"
                        value={leadResearcher}
                        onChange={(e) => setLeadResearcher(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="startDate">Fecha de Inicio</label>
                    <input 
                        type="date" 
                        id="startDate" 
                        name="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="endDate">Fecha de Finalización</label>
                    <input 
                        type="date" 
                        id="endDate" 
                        name="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="budget">Presupuesto</label>
                    <input 
                        type="number" 
                        id="budget" 
                        name="budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Registrar Proyecto</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default ProjectForm;
