import Layout from '../Layout';
import CategoryHeader from '../../categories/CategoryHeader';
import categoryDescriptions from '../../categories/categoryDescriptions';
import * as styles from '../../../styles/theme/theme.module.sass';
import { lazy, Suspense } from 'react';

const QuizBoard: React.FC = lazy(() => import('./../../quiz/Quiz'));

const Quiz: React.FC = () => (
    <Layout
        mainClassName={`${styles['texture-background']} ${styles['category-layout']}`}
        showAside
        main={
            <>
                <CategoryHeader
                    categoryDescription={categoryDescriptions['quiz']}
                />
                <Suspense>
                    <QuizBoard />
                </Suspense>
            </>
        }
    />
);

export default Quiz;
