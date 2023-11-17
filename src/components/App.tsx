import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from '../styles/theme/theme.module.sass';

// Route layouts
import Home from './layout/home/Home';
import About from './layout/about/About';
import Categories from './layout/categories/Categories';
import Credits from './layout/credits/Credits';
import Quiz from './layout/quiz/Quiz';
import Episodes from './layout/episodes/Episodes';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/categories" Component={Categories}></Route>
            <Route path="/credits" Component={Credits}></Route>
            <Route path="/quiz" Component={Quiz}></Route>
            <Route path="/episodes" Component={Episodes}></Route>
        </Routes>
    </BrowserRouter>
);

export default App;
