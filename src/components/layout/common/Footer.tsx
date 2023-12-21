import * as styles from '../../../styles/layout/footer.module.sass';
import textLogo from '../../../../public/img/text-logo.png';
import { routes, categoryRoutes, Route } from './routes';
import { Link } from 'react-router-dom';

interface LinkContainerProps {
    name: string;
    routes: Route[];
}

const LinkContainer: React.FC<LinkContainerProps> = ({ name, routes }) => (
    <div>
        <h2>{name}</h2>
        <ul>
            {routes.map(({ name, route }) => (
                <li key={name}>
                    <Link to={route}>{name}</Link>
                </li>
            ))}
        </ul>
    </div>
);
const Footer: React.FC = () => (
    <div id={styles.footer}>
        <img id={styles['text-logo']} src={textLogo} alt="logotipo de texto" />
        <p>
            &copy; {new Date().getFullYear()} Elias Petry | UOC - Asignatura:
            Herramientas HTML y CSS I [PEC 2]
        </p>
        <div id={styles['links-wrapper']}>
            <LinkContainer name="Rutas" routes={routes} />
            <hr></hr>
            <LinkContainer name="Categorías" routes={categoryRoutes} />
        </div>
    </div>
);

export default Footer;
