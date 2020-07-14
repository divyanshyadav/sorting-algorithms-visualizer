import React from 'react';
import Home from './screens/home'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import './App.css';

export default function App() {
    return (
        <div className="App">
            <Router>
                <Home />
            </Router>
        </div>
    );
}