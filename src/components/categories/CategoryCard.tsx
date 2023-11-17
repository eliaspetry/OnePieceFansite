import { Link } from 'react-router-dom';
import * as styles from '../../styles/categories/categories.module.sass';

export interface CategoryCardProps {
    route: string;
    title: string;
    description: string;
    image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    route,
    title,
    description,
    image
}) => (
    <Link to={route} key={title}>
        <div className={styles.category}>
            <h2 className={styles['category-title']}>{title}</h2>
            <p className={styles['category-description']}>{description}</p>
            <img className={styles['category-image']} src={image} alt={title} />
        </div>
    </Link>
);

export default CategoryCard;
