// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ProjectForm from './components/ProjectForm';
import Panel from './components/Panel';
import Home from './components/Home';
// import './styles.css';

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/project-form" element={<ProjectForm />} />
                <Route path="/panel" element={<Panel />} />
            </Routes>
        </Router>
    );
};

export default App;
