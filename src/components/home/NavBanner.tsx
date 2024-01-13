import luffyFlagIcon from '../../../public/img/luffy-flag.png';
import NavCard, { NavCardProps } from './NavCard';
import Divider from './Divider';
import * as styles from '../../styles/home/nav-banner.module.sass';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface NavBannerProps {
    navCards: NavCardProps[];
}

const NavBanner: React.FC<NavBannerProps> = ({ navCards }) => (
    <section id={styles['nav-banner']}>
        <h1>One Piece</h1>
        <h2>Todos los detalles sobre la nueva serie de Netflix</h2>

        <div id={styles['cards-wrapper']}>
            <LazyLoadImage
                id={styles['luffy-flag-icon']}
                src={luffyFlagIcon}
                alt="luffy flag icon"
            />
            <h3>¡Súbete a bordo!</h3>
            <Divider />
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
