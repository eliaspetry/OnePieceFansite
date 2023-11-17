import CategoryCard from './CategoryCard';
import categoryDescriptions, {
    CategoryDescription
} from './categoryDescriptions';
import * as styles from '../../styles/categories/categories.module.sass';

const Categories: React.FC = () => (
    <div id={styles['categories-wrapper']}>
        <ul id={styles.categories}>
            {categoryDescriptions.map(categoryDescription => (
                <li key={categoryDescription.title}>
                    <CategoryCard {...categoryDescription} />
                </li>
            ))}
        </ul>
    </div>
);

export default Categories;
