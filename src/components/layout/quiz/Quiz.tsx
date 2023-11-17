import Layout from '../Layout';
import QuizBoard from './../../quiz/Quiz';
import * as styles from '../../../styles/theme/theme.module.sass';

const Quiz: React.FC = () => (
    <Layout
        mainClassName={styles['texture-background']}
        showAside
        main={<QuizBoard />}
    />
);

export default Quiz;
