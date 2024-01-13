import { Link } from 'react-router-dom';
import * as styles from '../../styles/categories/categories.module.sass';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
            <h1 className={styles['category-title']}>{title}</h1>
            <p className={styles['category-description']}>{description}</p>
            <LazyLoadImage
                className={styles['category-image']}
                src={image}
                alt={title}
            />
        </div>
    </Link>
);

export default CategoryCard;
