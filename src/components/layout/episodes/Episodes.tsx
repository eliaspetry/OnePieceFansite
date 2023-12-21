import Layout from '../Layout';
import EpisodesContent from '../../episodes/Episodes';
import CategoryHeader from '../../categories/CategoryHeader';
import categoryDescriptions from '../../categories/categoryDescriptions';
import * as styles from '../../../styles/episodes/episodes.module.sass';

const Episodes: React.FC = () => (
    <Layout
        mainClassName={`${styles['texture-background']} ${styles['category-layout']}`}
        showAside
        main={
            <>
                <CategoryHeader
                    categoryDescription={categoryDescriptions['episodes']}
                />
                <EpisodesContent />
            </>
        }
    />
);

export default Episodes;
