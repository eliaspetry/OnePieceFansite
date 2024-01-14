import { Link } from 'react-router-dom';
import luffyFlag from '../../../../public/img/luffy-flag.png?as=avif';
import textLogo from '../../../../public/img/text-logo.png?as=avif';
import { routes, Route } from './routes';
import * as styles from '../../../styles/layout/header.module.sass';

const Header: React.FC = () => (
    <div id={styles.header}>
        <nav>
            <ul>
                {routes.map(({ name, route }: Route) => (
                    <li key={name}>
                        <Link to={route}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div id={styles['logo-wrapper']}>
            <Link to="/">
                <img id={styles.logo} src={luffyFlag} alt="logo" />
                <img
                    id={styles['text-logo']}
                    src={textLogo}
                    alt="logotipo de texto"
                />
            </Link>
        </div>
    </div>
);

export default Header;
