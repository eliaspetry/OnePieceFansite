import Layout from '../Layout';
import EpisodesContent from '../../episodes/Episodes';
import * as styles from '../../../styles/episodes/episodes.module.sass';

const Episodes: React.FC = () => (
    <Layout
        mainClassName={styles['texture-background']}
        showAside
        main={<EpisodesContent />}
    />
);

export default Episodes;
