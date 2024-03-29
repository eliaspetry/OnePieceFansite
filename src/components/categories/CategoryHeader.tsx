import { CategoryDescription } from './categoryDescriptions';
import * as styles from '../../styles/categories/category-header.module.sass';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface CategoryHeaderProps {
    categoryDescription: CategoryDescription;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
    categoryDescription: { title, description, image }
}) => (
    <div id={styles['category-header']}>
        <div id={styles['category-backdrop']}>
            <LazyLoadImage src={image} alt="" />
            <div id={styles['category-info']}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

export default CategoryHeader;
