import { createRoot } from 'react-dom/client';
import App from './components/App';

const rootDiv = document.querySelector('#root'),
    root = createRoot(rootDiv!);

root.render(<App />);
