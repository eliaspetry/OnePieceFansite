import { Link } from 'react-router-dom';
import luffyFlag from '../../../../public/img/luffy-flag.png';
import * as styles from '../../../styles/layout/header.module.sass';

const Header: React.FC = () => (
    <div id={styles.header}>
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Presentación</Link>
                </li>
                <li>
                    <Link to="/categories">Categorías</Link>
                </li>
                <li>
                    <Link to="/credits">Enlaces</Link>
                </li>
            </ul>
        </nav>
        <div id={styles['logo-wrapper']}>
            <Link to="/">
                <img id={styles.logo} src={luffyFlag} alt="logo" />
            </Link>
        </div>
    </div>
);

export default Header;
