import Layout from '../Layout';
import QuizBoard from './../../quiz/Quiz';
import CategoryHeader from '../../categories/CategoryHeader';
import categoryDescriptions from '../../categories/categoryDescriptions';
import * as styles from '../../../styles/theme/theme.module.sass';

const Quiz: React.FC = () => (
    <Layout
        mainClassName={`${styles['texture-background']} ${styles['category-layout']}`}
        showAside
        main={
            <>
                <CategoryHeader
                    categoryDescription={categoryDescriptions['quiz']}
                />
                <QuizBoard />
            </>
        }
    />
);

export default Quiz;
