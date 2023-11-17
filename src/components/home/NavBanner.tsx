import luffyFlagIcon from '../../../public/img/luffy-flag.png';
import NavCard, { NavCardProps } from './NavCard';
import * as styles from '../../styles/home/nav-banner.module.sass';

interface NavBannerProps {
    navCards: NavCardProps[];
}

const NavBanner: React.FC<NavBannerProps> = ({ navCards }) => (
    <section id={styles['nav-banner']}>
        <h1>One Piece</h1>
        <h2>Todos los detalles sobre la nueva serie de Netflix</h2>

        <div id={styles['cards-wrapper']}>
            <img
                id={styles['luffy-flag-icon']}
                src={luffyFlagIcon}
                alt="luffy flag icon"
            />
            <h3>¡Súbete a bordo!</h3>
            <p>
                Curiosidades y minijuegos sobre el estreno del live-action para
                que no te quedes en tierra:
            </p>
            <nav>
                <ul>
                    {navCards.map((navCard: NavCardProps) => (
                        <li key={navCard.title}>
                            <NavCard {...navCard} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </section>
);

export default NavBanner;
