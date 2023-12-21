import CategoryCard from '../../categories/CategoryCard';
import categoryDescriptions, {
    CategoryDescription
} from '../../categories/categoryDescriptions';
import { useLocation } from 'react-router-dom';
import * as styles from '../../../styles/layout/aside.module.sass';

const Aside: React.FC = () => {
    const numberOfRecommendations = 3;

    /**
     * @private
     * @description Picks a number of random recommendations
     * @param count - The number of recommendations to choose (if the pool has less, it will cap at pool length)
     * @returns {CategoryDescription[]} - The list of chosen recommendations
     */
    function _chooseRecommendations(count: number): CategoryDescription[] {
        const picked = [],
            pool = [...Object.values(categoryDescriptions)];

        while (picked.length < count && pool.length) {
            const index = Math.floor(Math.random() * pool.length);

            // We don't want to suggest the current route again
            if (pool[index].route !== useLocation().pathname)
                picked.push(pool[index]);

            pool.splice(index, 1);
        }

        return picked;
    }

    return (
        <>
            <h2>También te puede interesar:</h2>
            <ul id={styles.recommendations}>
                {_chooseRecommendations(numberOfRecommendations).map(
                    categoryDescription => (
                        <li key={categoryDescription.title}>
                            <CategoryCard {...categoryDescription} />
                        </li>
                    )
                )}
            </ul>
        </>
    );
};

export default Aside;
