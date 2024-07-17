import React, { useEffect } from 'react';
import '../panel.css';
import { useLocalStorage } from '../useLocalStorage';

const Panel = () => {
    useEffect(() => {
        // Añadir la clase al body cuando el componente se monte
        document.body.classList.add('panel-body');

        // Limpiar la clase del body cuando el componente se desmonte
        return () => {
            document.body.classList.remove('panel-body');
        };
    }, []);

    const [projects] = useLocalStorage('projects', []);

    return (
        <div className="panel">
            <header>
                <h1>Panel de Control</h1>
            </header>
            <main>
                <h2>Proyectos de Investigación</h2>
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <div key={index} className="project">
                            <h3>{project.projectTitle}</h3>
                            <p><strong>Descripción:</strong> {project.description}</p>
                            <p><strong>Investigador Principal:</strong> {project.leadResearcher}</p>
                            <p><strong>Fecha de Inicio:</strong> {project.startDate}</p>
                            <p><strong>Fecha de Finalización:</strong> {project.endDate}</p>
                            <p><strong>Presupuesto:</strong> ${project.budget}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay proyectos registrados</p>
                )}
            </main>
        </div>
    );
};

export default Panel;
