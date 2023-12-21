import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';
import App from './components/App';

const rootDiv = document.querySelector('#root'),
    root = createRoot(rootDiv!);

// Inject axe to obtain a11y accesibility testing feedback in the browser console, only if in development mode
if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
}

root.render(<App />);
