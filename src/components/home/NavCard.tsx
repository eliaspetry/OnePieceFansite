import { Link } from 'react-router-dom';
import * as styles from '../../styles/home/nav-card.module.sass';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export interface NavCardProps {
    thumbnail: string;
    thumbnailAlt: string;
    title: string;
    description: string;
    route: string;
}

const NavCard: React.FC<NavCardProps> = ({
    thumbnail,
    thumbnailAlt,
    title,
    description,
    route
}) => (
    <Link to={route}>
        <div className={styles['nav-card']}>
            <h4>{title}</h4>
            <LazyLoadImage src={thumbnail} alt={thumbnailAlt} />
            <p>{description}</p>
        </div>
    </Link>
);

export default NavCard;
